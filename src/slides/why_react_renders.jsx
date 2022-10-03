import React from "react";
import { list, useSteppedValue } from "../presentation";

const whyReactRenders = {
  steps: 8,
  component: ({ stepId }) => {
    const controlledState = useSteppedValue(stepId, {
      0: ["Controlled state changes", ["", ""]],
      4: ["Controlled state changes", ["Hooks changed", ""]],
      5: ["Controlled state changes", ["Hooks changed", "Context changed"]],
    });
    const parentRenders = useSteppedValue(stepId, {
      0: ["Parent renders", [""]],
      6: [
        "Parent renders",
        ["Doesn't matter if props changed (Unless we use React.memo)"],
      ],
    });
    const variableItems = useSteppedValue(stepId, {
      0: [],
      1: ["Only two reasons"],
      2: ["Only two reasons", [...controlledState]],
      3: ["Only two reasons", [...controlledState, ...parentRenders]],
      7: [
        "Only two reasons",
        [...controlledState, ...parentRenders],
        <>
          For a more detailed information, as well as tips for reducing
          unnecessary renders, see{" "}
          <a href="https://www.developerway.com/posts/react-re-renders-guide">
            React re-renders guide
          </a>
        </>,
      ],
    });
    return React.Children.toArray([
      <h1>{"Why React Renders"}</h1>,
      ...list(variableItems),
    ]);
  },
  notes: [
    "Any state used by a hook is inlined in the component",
    "So hooks changing is really no different from controlled state changing",
    "Not really sure how context differs from state in this situation",
    "Won't be going into detail on useContext, useState, useReducer in this presentation",
    "But I will demo one common misconception about props",
  ],
};

export default whyReactRenders;
