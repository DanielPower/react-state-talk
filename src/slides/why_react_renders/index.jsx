import React from "react";
import { simpleSlide } from "../../presentation";

const whyReactRenders = simpleSlide([
  <h1>{"Why React Renders"}</h1>,
  ...[
    "Subscribed state changes",
    "Parent renders (not because props changed)",
  ].map((v) => <li>{v}</li>),
]);

export default whyReactRenders;
