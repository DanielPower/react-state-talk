import { CodeBlock, list, simpleSlide } from "crispy-presentation";
import storeCode from "./store.txt?raw";
import buyNowCode from "./buy_now.txt?raw";
import cartItemsCode from "./cart_items.txt?raw";

const zustandIntro = simpleSlide([
  <h1>Monolithic Global State (Zustand, Redux)</h1>,
  ...list([
    "State lives outside of React context",
    [
      "It is very easy to update and read the store outside of a React component",
    ],
    "There is only one store",
    [
      "The store may be broken up into slices to organize by feature",
      "Both Redux Toolkit and Opine enforce a sliced structure",
    ],
    "Modifying the store is done through an action",
    [
      "Many parts of state can be updated in a single action",
      "It's recommended that state updates be combined so that one user interaction results in one action",
    ],
    "More boilerplate compared to atomic state",
    "More powerful debugging tools compared to atomic state",
    [
      "Redux Dev Tools are exceptional",
      [
        "Shows an audit log of every action that has run",
        "Each action can be inspected to see the resulting diff, as well as a stack trace",
        "If a bug is caused by a bad store update, dev tools will immediately point you to the source",
      ],
      "Zustand, Redux, and Opine all support Redux Dev Tools",
      "My next talk will go into more detail about Redux Dev Tools, when I cover Opine",
    ],
    "Monolithic global state is best used in medium to large size applications",
  ]),
]);

const zustandDemo = simpleSlide([
  <h1>Monolithic Global State (Zustand, Redux)</h1>,
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

export default [zustandIntro, zustandDemo];
