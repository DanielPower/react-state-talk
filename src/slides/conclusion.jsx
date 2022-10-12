import { list, simpleSlide } from "crispy-presentation";

const conclusion = simpleSlide([
  <h1>Conclusion</h1>,
  ...list([
    "If writing a small application, or a prototype, atomic global state is fine",
    [
      "It has very little boilerplate, reads naturally, and is very simple to conceptualize",
      "At this scale, the maintainability issues aren't a concern, especially on a small or solo team",
    ],
    "If writing a larger application or working with many developers, use action based state",
    [
      "A monolithic store with centralized transformation functions (actions) is easier to validate for correctness",
      "When a bug is introduced, the developer tooling allows you to quickly discover which action caused the bad state update, and from where it was called",
    ],
    "The lack of render optimization, complex and ugly nesting of providers, and general clunkiness makes me hesitant to recommend useContext except in niche cases",
    [
      "One benefit of useContext is that you can have multiple providers for the same context.",
      [
        "You can wrap different children in different providers for the same context",
        "Each of those children would then have their own copy of the store which is updated and read independently",
        'Useful for example if you want to have state that is "global" to each instance of a particular component, but not global to the entire app',
        "You can also use context to provide a Zustand store instance, so you can get the best of both worlds",
      ],
    ],
  ]),
]);

export default conclusion;
