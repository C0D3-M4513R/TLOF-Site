import {events as eventsNoLogo} from './events.js'

const event_path = "assets/events/posters/";
const eventLogos = Object.fromEntries(
    Object.entries(
        //@ts-ignore
        import.meta.glob('@/assets/events/posters/*',{eager: true})
    ).map(
        ([k, v], _) => [k.slice(k.lastIndexOf(event_path) + event_path.length, k.lastIndexOf('.')), v.default]
    )
);
const events = eventsNoLogo.map(value => {
    if (Array.isArray(value.poster)) value.poster = value.poster.map(value => eventLogos[value]);
    else if (typeof value.poster === 'string') value.poster = eventLogos[value.poster];
    return value;
})

export {events};
