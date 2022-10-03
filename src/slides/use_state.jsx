import { list, simpleSlide } from "../presentation";

const limitationsOfUseState = simpleSlide(
  [
    <h1>Limitation of useState</h1>,
    ...list([
      "useState values must be shared manually between components",
      [
        "If a value must be read by a deeply nested child, it must be passed through each component in-between",
        [
          "Even if none of the children in-between use that value",
          "This makes code harder to read, since components need to handle data that is unrelated to them",
        ],
        "State may only be passed down the tree. If two cousin components require the same state, it must be hoisted to the nearest parent",
        "State setters must also be manually passed this way",
        'This results in a pattern known as "Prop Drilling"',
      ],
    ]),
  ],
  ["If time allows, maybe show Drive as an example"]
);

export default limitationsOfUseState;
