const event_path = "assets/events/";
const eventLogos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/events/*',{eager: true})).map(([k, v], _) => [k.slice(k.lastIndexOf(event_path) + event_path.length, k.lastIndexOf('.')), v.default])
);
const events = [
    {
        name: "RAVE",
        startDate: new Date("2025-02-02T01:00:00+01:00"),
        poster: eventLogos['RAVE-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-02-15T22:00:00+01:00"),
        poster: eventLogos['MMM-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-03-02T01:00:00+01:00"),
        poster: eventLogos['RAVE-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-03-22T22:00:00+01:00"),
        poster: eventLogos['MMM-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-03-02T01:00:00+01:00"),
        poster: eventLogos['RAVE-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-03-22T22:00:00+01:00"),
        poster: eventLogos['MMM-Horizontal-GMT1'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-04-06T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "Easter Party",
        startDate: new Date("2025-04-13T00:00:00+02:00"),
        //poster: eventLogos['MMM-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-05-04T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-05-17T22:00:00+02:00"),
        poster: eventLogos['MMM-Horizontal-GMT2'],
        club: "Club Orion",
        description: "Last Midmonth Madness before Summer break!",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-06-01T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-06-29T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-08-03T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-09-07T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-09-20T22:00:00+02:00"),
        poster: eventLogos['MMM-Horizontal-GMT2'],
        club: "Club Orion",
        description: "Midmonth Madness is back from Summer break!",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-10-05T01:00:00+02:00"),
        poster: eventLogos['RAVE-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2025-10-25T22:00:00+02:00"),
        poster: eventLogos['MMM-Horizontal-GMT2'],
        club: "Club Orion",
    },
    {
        name: "Halloween Party",
        startDate: new Date("2025-10-31T22:30:00+01:00"),
        poster: eventLogos.halloween,
        club: "Club Orion",
    },
    {
        name: "RAVE",
        startDate: new Date("2025-11-02T01:00:00+01:00"),
        poster: eventLogos['RAVE-Horizontal-GMT1'],
        club: "Club Orion",
        description: "Last RAVE this Year!",
    },
];

const eventDates = events.map((item) => item.startDate.toISOString());

export { events, eventDates };
