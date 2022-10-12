import React, { useEffect, useRef, useState } from "react";
import parent_code from "./parent.txt?raw";
import child_code_1 from "./child_1.txt?raw";
import child_code_2 from "./child_2.txt?raw";
import { useSteppedValue, CodeBlock } from "crispy-presentation";

const Parent = ({ memoize }) => {
  const [count, setCount] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <button onClick={() => setCount((count) => count + 1)}>
        Parent renders: {count}
      </button>
      {memoize ? <MemoChild /> : <Child />}
    </div>
  );
};

const Child = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return `Child Renders: ${renderCount.current + 1}`;
};

const MemoChild = React.memo(Child);

const simpleProps = {
  steps: 2,
  component: ({ stepId }) => {
    const { child_code, memoize, highlightRanges } = useSteppedValue(stepId, {
      0: {
        memoize: false,
        child_code: child_code_1,
      },
      1: {
        memoize: true,
        child_code: child_code_2,
        highlightRanges: [[1, 1]],
      },
    });
    return (
      <>
        <h1>Why React Renders - Demo</h1>
        <h4>Parent</h4>
        <CodeBlock language="jsx">{parent_code}</CodeBlock>
        <h4>Child</h4>
        <CodeBlock language="jsx" highlightRanges={highlightRanges}>
          {child_code}
        </CodeBlock>
        <Parent key={memoize} memoize={memoize} />
      </>
    );
  },
  notes: [
    "Code snippets simplified to fit on slide",
    "Full source code available",
  ],
};

export default simpleProps;
