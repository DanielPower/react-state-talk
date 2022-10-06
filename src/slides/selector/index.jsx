import { list, simpleSlide, CodeBlock } from "crispy-presentation";
import selector_code from "./selector.txt?raw";

const selector = simpleSlide([
  <h1>Selector</h1>,
  ...list([
    "A function whose only argument the current state of the store, and returns a subset of the store",
  ]),
  <>
    <h2>Example</h2>
    Select all high priority tasks
    <CodeBlock language="javascript">{selector_code}</CodeBlock>
  </>,
  ...list([
    "useStore accepts a selector as its only argument",
    "useStore creates a subscription that causes a render only when the result of its selector changes",
    "This is very powerful, since we have full control over which parts of state cause a render",
    "Also very dangerous, since if we're not careful, we cause many renders we did not intend",
    "With great power comes great responsibility",
  ]),
]);

export default selector;
