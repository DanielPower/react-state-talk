import React from "react";
import { list, simpleSlide } from "../../presentation";

const title = simpleSlide([
  <h1>{"Dan's React State Talk"}</h1>,
  ...list([
    "Why React Renders",
    "Component State (useState)",
    "Dependency Injection (useContext)",
    "Atomic Global State (jotai, reactiveVars)",
    "Action / Reducer based Global State (Zustand, Redux)",
  ]),
]);

export default title;
