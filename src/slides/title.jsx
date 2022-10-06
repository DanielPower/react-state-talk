import React from "react";
import { list, simpleSlide } from "crispy-presentation";

const title = simpleSlide(
  [
    <h1>{"React State Talk"}</h1>,
    ...list([
      "Why React Renders",
      "Limitations of useState",
      "Dependency Injection (useContext)",
      "Atomic Global State (jotai, reactiveVars)",
      "Action / Reducer based Global State (Zustand, Redux)",
    ]),
  ],
  [
    "Very briefly cover why React Renders",
    "Then a quick overview of the different types of state management",
    "Most of the talk will cover usage of Opine, Opine best practices, and optimizations",
  ]
);

export default title;
