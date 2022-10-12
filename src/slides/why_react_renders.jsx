import React from "react";
import { list, simpleSlide } from "crispy-presentation";

const whyReactRenders = simpleSlide(
  [
    <h1>Why React Renders</h1>,
    ...list([
      "Only two reasons",
      [
        "Parent renders",
        ["Doesn't matter if props changed (Unless we use React.memo)"],
        "Hooks changed",
        [
          "Built-in hooks which cause state subscriptions",
          [
            "useState",
            "useReducer",
            "useExternalSyncStore",
            "useContext",
            "etc.",
          ],
          "Any custom hook which calls a hook that causes a state subscription",
        ],
      ],
    ]),
  ],
  [
    "Any state used by a hook is inlined in the component",
    "So hooks changing is really no different from controlled state changing",
    "Not really sure how context differs from state in this situation",
    "Won't be going into detail on useContext, useState, useReducer in this presentation",
    "But I will demo one common misconception about props",
  ]
);

export default whyReactRenders;
