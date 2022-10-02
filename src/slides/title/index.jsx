import React from "react";
import { simpleSlide } from "../../presentation";

const title = simpleSlide([
  <h1>{"Dan's React State Talk"}</h1>,
  ...[
    "Why React Renders",
    "Component State (useState)",
    "Dependency Injection (useContext)",
    "Atomic Global State (jotai, reactiveVars)",
    "Action / Reducer based Global State (Zustand, Redux)",
  ].map((v) => <li>{v}</li>),
]);

export default title;
