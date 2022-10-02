import React, { useEffect, useRef, useState } from "react";
import { CodePane, FlexBox, Heading, Stepper, Text, useSteps } from "spectacle";
import parent_code from "./parent.txt?raw";
import child_code_1 from "./child_1.txt?raw";
import child_code_2 from "./child_2.txt?raw";

const Parent = () => {
  const [count, setCount] = useState(1);

  return (
    <FlexBox flexDirection="column" padding="2rem">
      <button onClick={() => setCount((count) => count + 1)}>
        Parent renders: {count}
      </button>
      <MemoChild />
    </FlexBox>
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

const SimpleProps = () => {
  return (
    <>
      <Heading>Prop Changes</Heading>
      <FlexBox alignItems="start">
        <FlexBox padding={1} flexDirection="column">
          <Text>Parent</Text>
          <CodePane width="auto" language="javascript">
            {parent_code}
          </CodePane>
        </FlexBox>
        <FlexBox padding={1} flexDirection="column">
          <Text>Child</Text>
          <Stepper alwaysVisible values={[child_code_1, child_code_2]}>
            {(value) => (
              <CodePane
                highlightRanges={[1, 1]}
                width="auto"
                language="javascript"
              >
                {value}
              </CodePane>
            )}
          </Stepper>
        </FlexBox>
      </FlexBox>
      <Parent />
    </>
  );
};

export default SimpleProps;
