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
];

const faqIds = questionsAndAnswers.map((item) => item.id);

export { questionsAndAnswers, faqIds };