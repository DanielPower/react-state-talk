import React, { useEffect, useRef, useState } from "react";
import parent_code from "./parent.txt?raw";
import child_code_1 from "./child_1.txt?raw";
import child_code_2 from "./child_2.txt?raw";
import { CodeBlock } from "../../prism";
import { useSteppedValue } from "../../presentation";

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
  component: () => {
    const child_code = useSteppedValue(0, [child_code_1, child_code_2]);
    const memoize = useSteppedValue(0, [false, true]);
    return (
      <>
        <h1>Prop Changes</h1>
        <p>Parent</p>
        <CodeBlock width="auto" language="jsx">
          {parent_code}
        </CodeBlock>
        <p>Child</p>
        <CodeBlock language="jsx">{child_code}</CodeBlock>
        <Parent memoize={memoize} />
      </>
    );
  },
};

export default simpleProps;
