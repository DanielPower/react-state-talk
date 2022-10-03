import { list, simpleSlide } from "../presentation";

const hmm = simpleSlide([
  <h1>Hmm... Thoughts Dan had while writing this</h1>,
  ...list([
    "Maybe we can provide the store through context",
    ["Might help with testing conflicts, i.e. each test gets its own store"],
    "As I learn more about data oriented programming, immutable state updates, and React global state, my concept of the ideal React state management library gets closer and closer to Redux Toolkit.",
    [
      "If Redux Toolkit were more established, and I had more experience with it during the 3.0 transition, that may have been the better route to go",
    ],
  ]),
]);

export default hmm;
