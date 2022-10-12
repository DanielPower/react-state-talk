import React from "react";
import { list, simpleSlide } from "crispy-presentation";

const title = simpleSlide(
  [
    <>
      <h1>{"React State Talk"}</h1>
      {list([
        "Why React Renders",
        "Methods of state management in React",
        [
          "Limitations of useState",
          "Dependency Injection (useContext)",
          "Atomic Global State (Jotai, Apollo Reactive Vars)",
          "Monolithic Global State (Zustand, Redux)",
        ],
        "This talk discusses the differences between state management strategies",
        "A separate upcoming talk will go into detail on our state management tool, Opine",
      ])}
    </>,
  ],
  [
    "Very briefly cover why React Renders",
    "Then a quick overview of the different types of state management",
  ]
);

export default title;
