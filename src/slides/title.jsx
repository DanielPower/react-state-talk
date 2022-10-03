import React from "react";
import { list, simpleSlide } from "../presentation";

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
  ["Testing", "Testin123", ["testing 2345"]]
);

export default title;
