import dependencyInjection from "./dependency_injection";
import extraReading from "./extra_reading";
import simpleProps from "./simple_props";
import title from "./title";
import limitationsOfUseState from "./use_state";
import whyReactRenders from "./why_react_renders";
import zustand from "./zustand";
import jotai from "./jotai";
import conclusion from "./conclusion";

const slides = [
  title,
  whyReactRenders,
  simpleProps,
  limitationsOfUseState,
  ...dependencyInjection,
  ...jotai,
  ...zustand,
  conclusion,
  extraReading,
];

export default slides;
