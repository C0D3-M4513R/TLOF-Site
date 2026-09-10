const event_path = "assets/events/";
const eventLogos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/events/*',{eager: true})).map(([k, v], _) => [k.slice(k.lastIndexOf(event_path) + event_path.length, k.lastIndexOf('.')), v.default])
);
const events = [
    {
        name: "RAVE",
        startDate: new Date("2026-02-01T01:00:00+01:00"),
        poster: eventLogos['RAVE-Horizontal-GMT1'],
        club: "Club Orion & ?",
    },
    {
        name: "NeoLuma Festival",
        startDate: new Date("2026-02-14T19:00:00+01:00"),
        poster: eventLogos['NEOLUMA_FESTIVAL_Poster_Vertical_4k_V1'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-03-01T01:00:00+01:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC1'],
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-03-14T23:00:00+01:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC1'],
        club: "Club Neoluma",
    },
    {
        name: "Easter RAVE",
        startDate: new Date("2026-04-05T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-04-18T23:00:00+02:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-05-10T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-05-23T23:00:00+02:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC2'],
        club: "Club Neoluma",
        description: "Last Midmonth Madness before Summer break!",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-06-07T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-07-05T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-08-02T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-09-06T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-09-19T23:00:00+02:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC2'],
        club: "Club Neoluma",
        description: "Midmonth Madness is back from Summer break!",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-10-04T01:00:00+02:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-10-24T23:00:00+02:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC2'],
        club: "Club Neoluma",
    },
    {
        name: "Halloween Party",
        startDate: new Date("2026-10-31T22:30:00+01:00"),
        poster: eventLogos.halloween,
        club: "Club Neoluma",
    },
    {
        name: "Midmonth Madness",
        startDate: new Date("2026-11-22T23:00:00+01:00"),
        poster: eventLogos['Midmonth_madness_2026_horizontal_UTC1'],
        club: "Club Neoluma",
    },
    {
        name: "RAVE",
        startDate: new Date("2026-12-06T01:00:00+01:00"),
        poster: eventLogos['RAVE_with_DJTLOF_2026_Horizontal_UTC1'],
        club: "Club Neoluma",
        description: "Last RAVE this Year!",
    },
    {
        name: "The Land of Christmass",
        startDate: new Date("2026-12-24T23:00:00+01:00"),
        poster: eventLogos['christmas'],
        club: "Club Neoluma",
        description: "Last RAVE this Year!",
    },
];

const eventDates = events.map((item) => item.startDate.toISOString());

export { events, eventDates };
