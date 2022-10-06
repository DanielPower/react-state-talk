import { useSteppedValue, CodeBlock } from "crispy-presentation";
import slice_text from "./slice.txt?raw";

const opineSlice = {
  steps: 6,
  component: ({ stepId }) => {
    const highlightRanges = useSteppedValue(stepId, {
      0: [],
      1: [[2, 8]],
      2: [[9, 23]],
      3: [[10, 13]],
      4: [[14, 17]],
      5: [[18, 23]],
    });
    return (
      <>
        <CodeBlock language="jsx" highlightRanges={highlightRanges}>
          {slice_text}
        </CodeBlock>
      </>
    );
  },
  notes: [
    "Discuss how store is a single object",
    "Mention to only use primitives, array, object, not map, set",
    "Mention how the `set` function bakes in the action name for dev tools",
  ],
};

export default opineSlice;
