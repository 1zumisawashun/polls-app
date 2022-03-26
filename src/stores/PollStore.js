import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "Vue.js or React?",
    answerA: "Vue.js",
    answerB: "React",
    votesA: 21,
    votesB: 11,
  },
]);

export default PollStore;
