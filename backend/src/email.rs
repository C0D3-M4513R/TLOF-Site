use std::str::FromStr;
use lettre::AsyncTransport;

#[derive(rocket::response::Responder)]
pub enum Response {
    JSON((rocket::http::Status, rocket::serde::json::Value)),
}
#[derive(rocket::form::FromForm)]
pub struct Request {
    name: String,
    from: String,
    subject: String,
    message: String,
}
#[rocket::post("/email", data="<data>")]
pub async fn send_email(
    state: &rocket::State<crate::MailConfig>,
    transport: &rocket::State<lettre::AsyncSmtpTransport::<lettre::Tokio1Executor>>,
    data: rocket::form::Form<Request>,
) -> Response {
    let data = data.into_inner();
    if data.name.chars().any(|v|!v.is_alphanumeric() && v != ' ') {
        return Response::JSON((
            rocket::http::Status::BadRequest,
            rocket::serde::json::json!({
                "error": "Name contains non-Alphanumeric characters",
            })
        ));
    }
    if data.from.chars().any(|v|!v.is_alphanumeric() && !v.is_ascii_punctuation()) {
        return Response::JSON((
            rocket::http::Status::BadRequest,
            rocket::serde::json::json!({
                "error": "From contains non-Alphanumeric and non-ascii-punctuation characters",
            })
        ));
    }
    if data.message.is_empty() {
        return Response::JSON((
            rocket::http::Status::BadRequest,
            rocket::serde::json::json!({
                "error": "Message is empty",
            })
        ));
    }
    if data.subject.is_empty() {
        return Response::JSON((
            rocket::http::Status::BadRequest,
            rocket::serde::json::json!({
                "error": "Subject is empty",
            })
        ));
    }
    let from = match lettre::Address::from_str(&data.from) {
        Ok(v) => v,
        Err(e) => {
            return Response::JSON((
                rocket::http::Status::BadRequest,
                rocket::serde::json::json!({
                    "error": format!("From Address is not valid: {e}"),
                })
            ));
        }
    };
    let from = lettre::message::Mailbox::new(Some(data.name), from);
    let message = match lettre::Message::builder()
        .from(state.from.clone())
        .to(state.to.clone())
        .reply_to(from)
        .date_now()
        .user_agent(state.user_agent.clone())
        .subject(data.subject)
        .body(data.message)
    {
        Ok(message) => message,
        Err(e) => {
            return Response::JSON((
                rocket::http::Status::InternalServerError,
                rocket::serde::json::json!({
                    "error": e.to_string(),
                })
            ));
        }
    };
    return Response::JSON((rocket::http::Status::Ok, rocket::serde::json::json!({
        "message": "Email validated successfully",
        "code": "200",
    })));
    #[allow(unreachable_code)]
    match transport.send(message).await {
        Ok(v) => {
            if v.is_positive() {
                Response::JSON((
                    rocket::http::Status::Ok,
                    rocket::serde::json::json!({
                        "message": "Email sent successfully",
                        "code": v.code().to_string(),
                        "messages": v.message().collect::<Vec<_>>(),
                    })
                ))
            } else {
                Response::JSON((
                    rocket::http::Status::InternalServerError,
                    rocket::serde::json::json!({
                        "code": v.code().to_string(),
                        "messages": v.message().collect::<Vec<_>>(),
                    })
                ))
            }
        },
        Err(v) => {
            Response::JSON((
                rocket::http::Status::InternalServerError,
                rocket::serde::json::json!({
                    "error": v.to_string(),
                })
            ))
        }
    }
}