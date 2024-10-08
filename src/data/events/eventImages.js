const event_path = "assets/events/";
const allEventImages = import.meta.glob('@/assets/events/**Z/*',{eager: true});
const eventImages = {};
for (let [k, v] of Object.entries(allEventImages)) {
    const kPre = k.slice(k.lastIndexOf(event_path) + event_path.length);
    const kPost = kPre.slice(0, kPre.indexOf('/'));
    if (typeof eventImages[kPost] === 'undefined')
        eventImages[kPost] = []
    eventImages[kPost].push(v.default);
}

export {eventImages};


