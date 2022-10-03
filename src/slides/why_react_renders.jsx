import React from "react";
import { list, simpleSlide } from "../presentation";

const whyReactRenders = simpleSlide([
  <h1>{"Why React Renders"}</h1>,
  ...list([
    "Only two reasons",
    [
      "Controlled state changes",
      "Parent renders",
      ["Not because props changed"],
    ],
  ]),
]);

export default whyReactRenders;
