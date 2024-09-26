const event_path = "assets/events/";
const eventLogos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/events/*',{eager: true})).map(([k, v], _) => [k.slice(k.lastIndexOf(event_path) + event_path.length, k.lastIndexOf('.')), v.default])
);
const events = [
    {
        name: "RAVE",
        startDate: new Date("2024-10-06T01:00:00+02:00"),
        poster: eventLogos.rave,
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2024-10-26T22:00:00+02:00"),
        poster: eventLogos.midmonthMadness,
        club: "Club Orion",
    },
    {
        name: "Quest Rave",
        startDate: new Date("2024-10-27T01:00:00+02:00"),
        poster: eventLogos.questRave,
        club: "Club SHATAXE",
    },
    {
        name: "Halloween Party",
        startDate: new Date("2024-10-31T22:30:00+01:00"),
        poster: eventLogos.halloween,
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2024-11-03T01:00:00+01:00"),
        poster: eventLogos.rave,
        club: "Club Orion",
    },
    {
        name: "The Land of Christmas",
        startDate: new Date("2024-12-24T23:00:00+01:00"),
        poster: eventLogos.christmas,
        club: "Club Orion",
    },
];

const eventDates = events.map((item) => item.startDate.toISOString());

export { events, eventDates };