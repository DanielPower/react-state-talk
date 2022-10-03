import { list, simpleSlide } from "../../presentation";

const opine = simpleSlide([
  <h1>Opine</h1>,
  ...list([
    "Action based state updates",
    [
      "All possible actions for mutating state are defined in the store",
      "Easy to audit possible states, and debug invalid states",
    ],
    "Build-in Redux Dev Tools integration",
    [
      "Shows a log of all actions that have been run",
      "Can inspect the diff caused by each action to determine how the store got into a bad state",
    ],
    "Uses immer to simplify state mutations",
    [
      'Immer uses proxy "magic" to allow you to write immutable state updates with a more convenient mutable syntax',
    ],
  ]),
]);

export default opine;
