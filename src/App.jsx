import {
  Presentation,
  usePresentationKeybinds,
  usePresentationQueryParams,
  usePresentationStore,
} from "./presentation";
import slides from "./slides";
usePresentationStore.actions.presentation.loadPresentation(slides);

const App = () => {
  usePresentationKeybinds();
  usePresentationQueryParams();
  return <Presentation />;
};

export default App;
