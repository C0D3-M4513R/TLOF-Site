const questionsAndAnswers = [
    {
        id: "what-is-tlof",
        question: "What is The Land of Future?",
        answer: "The Land of Futures does VRChat parties. We mainly play in Club Orion and mainly play Psytrance, Bigroom and Hardstyle."
    },
    {
        id: "team",
        question: "Who is helping The Land of Future?",
        answer: ["All people who help The Land of Future are listed on the ", {component: 'router-link', props: {to: { name: 'Team' }}, content:'team page'}, '.'],
        safe: "All people who help The Land of Future are listed on the team page."
    },
    {
        id: "events",
        question: "When is/are the next event(s)?",
        answer: ["All known event dates will be posted on the ", {component: 'router-link', props: {to: { name: 'Events' }}, content:'events page'}, '.'],
        safe: "All known event dates will be posted on the events page."
    },
    {
        id: "how-to-staff",
        question: "How do I become DJ/LJ/Security/Photograph/Special Dancer?",
        answer: "Go to our <a href='%DISCORD_URL%'>Discord Server</a>, read the rules, confirm that you have read the rules, read the #job-descriptions channel and post your message in #job-request.",
        safe: "Go to our Discord Server, read the rules, confirm that you have read the rules, read the #job-descriptions channel and post your message in #job-request."
    },
    {
        id: "song-requests",
        question: "Can you play this Song?",
        answer: "Generally no. Especially not on short notice (e.g. when you come up to the dj during the event).<br> If you are nice and leave a little headroom you can post a message on our <a href='%DISCORD_URL%'>Discord Server</a> in the #song-request channel.<br>But please keep in mind, that it's still called a Song REQUEST!",
        safe: "Generally no. Especially not on short notice (e.g. when you come up to the dj during the event).\n If you are nice and leave a little headroom you can post a message on our Discord Server in the #song-request channel.\n But please keep in mind, that it's still called a Song REQUEST!"
    },
    {
        id: "kicks-or-bans",
        question: "I've been kicked from one of the events or banned from the group!",
        answer: "Sorry to hear that.<br> We usually kick people, if they are annoying or have the dj blocked. Bans are usually reserved for crashers or hackers.<br>If you were kicked, you can re-join the lobby after a short wait (VRChat is not very specific there, but usually it's c.a. 15min-1h).<br>And for bans, we don't revert them.",
        safe: "Sorry to hear that.\n We usually kick people, if they are annoying or have the dj blocked. Bans are usually reserved for crashers or hackers.\n If you were kicked, you can re-join the lobby after a short wait (VRChat is not very specific there, but usually it's c.a. 15min-1h).\nAnd for bans, we don't revert them.",
    },
];

const faqIds = questionsAndAnswers.map((item) => item.id);

export { questionsAndAnswers, faqIds };