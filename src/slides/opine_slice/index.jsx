import { simpleSlide } from "../../presentation";
import { CodeBlock } from "../../prism";
import slice_text from "./slice.txt?raw";

const opineSlice = simpleSlide([
  <>
    <CodeBlock language="jsx">{slice_text}</CodeBlock>
  </>,
]);

export default opineSlice;
