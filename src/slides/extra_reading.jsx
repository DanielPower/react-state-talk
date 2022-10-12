import React from "react";
import { list, simpleSlide } from "crispy-presentation";

const extraReading = simpleSlide([
  <>
    <h1>Extra Reading</h1>
    {React.Children.toArray([
      ...list([
        <a href="https://www.developerway.com/posts/react-re-renders-guide">
          React re-renders guide
        </a>,
        <a href="https://www.packtpub.com/product/micro-state-management-with-react-hooks/9781801812375">
          Micro State Management with React Hooks
        </a>,
        ["A copy is available in the CoLab Library"],
        <a href="https://redux.js.org/style-guide">Redux Style Guide</a>,
        [
          "While we don't use Redux, many of their best practices, and the rationale behind them apply to our Opine store as well",
        ],
      ]),
    ])}
  </>,
]);

export default extraReading;
