import { CodeBlock, list, simpleSlide } from "crispy-presentation";
import storeCode from "./store.txt?raw";
import buyNowCode from "./buy_now.txt?raw";
import cartItemsCode from "./cart_items.txt?raw";

const contextJoke = simpleSlide([
  <h1>Context Sharing (useContext)</h1>,
  <img src="provider-hell.webp" />,
]);

const contextIntro = simpleSlide([
  <>
    <h1>Context Sharing (useContext)</h1>
    {list([
      "Solves prop drilling by allowing shared state to be accessed directly through the context",
    ])}
  </>,
  ...list([
    "Weak render optimization. If the context changes, all components that use it re-render",
    [
      "Even if the particular part of the context they care about did not change",
      "Use of many smaller contexts improves this, but is more difficult to manage",
      [
        "Results in the deep nesting of providers shown on the previous image",
        "Can be difficult to manage. A context depending on another context must be its child",
      ],
      "There is currently an RFC proposal to allow selectors for contexts",
      [
        "There are also third party libraries with workarounds to implement this behaviour",
        "No official solution exists yet",
      ],
    ],
    "State lives in the React tree, so it is difficult to interact with outside of React",
    "Weak debugging tools",
    [
      "React Dev Tools and/or console.log to see when state is changing",
      "Then console.trace in the right places to hopefully find out why",
      "No access to Redux Dev Tools",
    ],
  ]),
]);

const contextDemo = simpleSlide([
  <h1>Context Sharing (useContext)</h1>,
  <>
    <h4>Provider</h4>
    <CodeBlock language="jsx">{storeCode}</CodeBlock>
  </>,
  <>
    <h4>BuyNowButton</h4>
    <CodeBlock language="jsx">{buyNowCode}</CodeBlock>
  </>,
  <>
    <h4>CartItemsIndicator</h4>
    <CodeBlock language="jsx">{cartItemsCode}</CodeBlock>
  </>,
]);

export default [contextJoke, contextIntro, contextDemo];
