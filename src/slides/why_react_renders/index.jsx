import React from "react";
import { list, simpleSlide } from "../../presentation";

const whyReactRenders = simpleSlide([
  <h1>{"Why React Renders"}</h1>,
  ...list([
    "Subscribed state changes",
    "Parent renders (not because props changed)",
  ]),
]);

export default whyReactRenders;
