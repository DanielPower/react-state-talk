import React from "react";
import { list, simpleSlide } from "../presentation";

const whyReactRenders = simpleSlide(
  [
    <h1>{"Why React Renders"}</h1>,
    ...list([
      "Only two reasons",
      [
        "Controlled state changes",
        ["Hooks changed", "Context changed"],
        "Parent renders",
        ["Doesn't matter if props changed (Unless we use React.memo)"],
      ],
      <>
        For a more detailed information, as well as tips for reducing
        unnecessary renders, see{" "}
        <a href="https://www.developerway.com/posts/react-re-renders-guide">
          React re-renders guide
        </a>
      </>,
    ]),
  ],
  [
    "Any state used by a hook is inlined in the component",
    "So hooks changing is really no different from controlled state changing",
    "Not really sure how context differs from state in this situation",
  ]
);

export default whyReactRenders;
