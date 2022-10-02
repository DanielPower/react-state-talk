import { AnimatedProgress, Box, Deck, FlexBox, FullScreen } from "spectacle";
import slides from "./slides";

const theme = {
  fontSizes: {
    text: "32px",
    h1: "42px",
  },
  space: [4, 4, 28],
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

const App = () => {
  return (
    <Deck theme={theme} template={template}>
      {slides}
    </Deck>
  );
};

export default App;
