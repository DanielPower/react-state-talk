import { CodeBlock, list, simpleSlide } from "crispy-presentation";
import storeCode from "./store.txt?raw";
import buyNowCode from "./buy_now.txt?raw";
import cartItemsCode from "./cart_items.txt?raw";

const jotaiIntro = simpleSlide([
  <h1>Atomic Global State (Jotai, Reactive Vars)</h1>,
  ...list([
    "State is provided through context (lives in the React component tree)",
    [
      "This makes it more difficult to interact with global state outside of React",
    ],
    "State is made up of many small stores (atoms)",
    "Very little boilerplate. Very easy to get started",
    "API is similar to `useState`, which makes it easy to get started",
    "Fantastic for a small application",
    "Can be difficult to debug complex interactions",
    [
      "All state updates are done through atoms.",
      "If a single user interaction causes many atoms to update, it can be difficult to track the diff",
      "Debug tools exist which let you audit the state of all atoms",
      "Less powerful than Redux Dev Tools, and provides less context, since multiple state updates cannot be composed into a single action",
    ],
  ]),
]);

const jotaiDemo = simpleSlide([
  <h1>Atomic Global State (Jotai, Reactive Vars)</h1>,
  <>
    <h4>Store</h4>
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

export default [jotaiIntro, jotaiDemo];
