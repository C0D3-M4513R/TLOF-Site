const partner_path = "assets/partners/";
const partnerLogos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/partners/*',{eager: true})).map(([k, v], _) => [k.slice(k.lastIndexOf(partner_path) + partner_path.length, k.lastIndexOf('.')), v.default])
);

const partners = [
    {
        name: "RaveCage",
        socials: ["https://discord.gg/gvx8PTpxnw"],
        linksBack: false,
        logo: partnerLogos.RaveCage,
    },
    {
        name: "Clava Romanum",
        socials: ["https://discord.gg/Jz7advxVPU"],
        linksBack: true,
        logo: partnerLogos.ClavaRomanum,
    },
    {
        name: "The Fountain of Dreams",
        socials: ["https://discord.com/invite/7bgp63MMbn"],
        linksBack: false,
        logo: partnerLogos.TheFountainOfDreams,
    },
    {
        name: "Heart of Fire",
        socials: ["https://discord.gg/EQXGgntnKw"],
        linksBack: true,
        logo: partnerLogos.HeartOfFire,
    }
];

export {partners};