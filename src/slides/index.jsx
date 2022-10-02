/* eslint-disable react/jsx-key */
import Title from "./title/Title";
import SimpleProps from "./simple_props/SimpleProps";
import { Slide } from "spectacle";
import React from "react";
import WhyReactRenders from "./why_react_renders/WhyReactRenders";

const slides = React.Children.toArray(
  [Title, WhyReactRenders, SimpleProps].map((Component) => (
    <Slide>
      <Component />
    </Slide>
  ))
);

export default slides;
