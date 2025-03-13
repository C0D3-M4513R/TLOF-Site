use std::str::FromStr;

mod email;

#[derive(rocket::serde::Deserialize)]
#[serde(crate = "rocket::serde")]
pub enum Method{
    PLAIN,
    LOGIN
}
impl From<Method> for lettre::transport::smtp::authentication::Mechanism {
    fn from(method: Method) -> Self {
        match method {
            Method::PLAIN => Self::Plain,
            Method::LOGIN => Self::Login,
        }
    }
}
#[derive(rocket::serde::Deserialize)]
#[serde(crate = "rocket::serde")]
pub struct SMTPConfig {
    server: String,
    timeout: Option<std::time::Duration>,
    hello_name: Result<std::net::IpAddr, String>,

    username: String,
    password: String,
    methods: Vec<Method>,
    from_email: String,
    from_name: Option<String>,
    to_email: String,
    to_name: Option<String>,
    user_agent: String,
}
pub struct MailConfig {
    from: lettre::message::Mailbox,
    to: lettre::message::Mailbox,
    user_agent: String,
}
#[rocket::main]
async fn main() {
    launch().launch().await.expect("Rocket failed to launch");
}
fn launch() -> rocket::Rocket<rocket::Build> {
    dotenvy::dotenv().expect("Failed to load .env file");
    {
        use tracing_subscriber::Layer;
        use tracing_subscriber::layer::SubscriberExt;
        use tracing_subscriber::util::SubscriberInitExt;

        let registry = tracing_subscriber::registry();
        #[cfg(tokio_unstable)]
        let registry = registry.with(console_subscriber::spawn());
        registry.with(
            tracing_subscriber::fmt::layer()
                .pretty()
                .with_filter(tracing_subscriber::filter::EnvFilter::from_default_env())
        )
            .init();
        log::info!("Initialized logging");
    }
    let rocket = rocket::build();
    #[cfg(not(feature = "dockerised"))]
    let file_path: std::path::PathBuf = rocket.figment().extract_inner("file_path").expect("File Path configuration not found");
    #[cfg(feature = "dockerised")]
    let file_path = std::path::PathBuf::from("/static");
    let rocket = rocket
        .mount("/api", rocket::routes![
            email::send_email,
        ]).mount("/", rocket::fs::FileServer::from(file_path));
    let config: SMTPConfig = rocket.figment().extract_inner("smtp").expect("SMTP configuration not found");
    let builder = lettre::AsyncSmtpTransport::<lettre::Tokio1Executor>::relay(&config.server).expect("SMTP server configuration error")
        .credentials(lettre::transport::smtp::authentication::Credentials::new(config.username.clone(), config.password.clone()))
        .authentication(config.methods.into_iter().map(Into::into).collect())
        .timeout(config.timeout);

    let builder = match config.hello_name {
        Err(v) => builder.hello_name(lettre::transport::smtp::extension::ClientId::Domain(v)),
        Ok(std::net::IpAddr::V4(ipv4)) => builder.hello_name(lettre::transport::smtp::extension::ClientId::Ipv4(ipv4)),
        Ok(std::net::IpAddr::V6(ipv6)) => builder.hello_name(lettre::transport::smtp::extension::ClientId::Ipv6(ipv6)),
    };
    let smtp_transport:lettre::AsyncSmtpTransport::<lettre::Tokio1Executor> = builder.build();

    let config = MailConfig {
        from: lettre::message::Mailbox::new(config.from_name,       lettre::Address::from_str(&config.from_email).expect("Expected from email-address to be valid")),
        to: lettre::message::Mailbox::new(config.to_name,           lettre::Address::from_str(&config.to_email).expect("Expected to email-address to be valid")),
        user_agent: config.user_agent,
    };

    let rocket = rocket.manage(config).manage(smtp_transport);
    rocket
}