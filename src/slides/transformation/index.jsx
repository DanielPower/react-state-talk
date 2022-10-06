import { list, simpleSlide, CodeBlock } from "crispy-presentation";
import transformation_code from "./transformation.txt?raw";
import transformation_generator_code from "./transformation_generator.txt?raw";

const transformation = simpleSlide([
  <h1>Transformation</h1>,
  ...list([
    "A function that accepts a state object as an argument, and returns a new state object",
    "It must not mutate the original state object",
    "Opine uses Immer, so we can write our transformations as though they mutate the original state",
  ]),
  <>
    <h2>Transformation Example</h2>
    <CodeBlock language="javascript">{transformation_code}</CodeBlock>
  </>,
  ...list([
    "A transformation takes no arguments other than state",
    "In order to perform more general state updates, write a transformation generator",
  ]),
  <>
    <h2>Transformation Generator Example</h2>
    <CodeBlock language="javascript">{transformation_generator_code}</CodeBlock>
  </>,
  ...list(["Similar to reducers in Redux"]),
]);

export default transformation;
