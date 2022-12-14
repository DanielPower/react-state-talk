import styled from "styled-components";
import {
  Notes,
  Presentation,
  Preview,
  usePresentationKeybinds,
  usePresentationQueryParams,
  usePresentationStore,
} from "crispy-presentation";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr min(64rem) 1fr min(64rem) 1fr;
`;

const PresenterPresentationCell = styled.div`
  grid-column: 2;
`;

const PreviewCell = styled.div`
  grid-column: 4;
  border: 1px solid;
  padding: 1rem;
`;

const NotesCell = styled.div`
  grid-column: 4;
  border: 1px solid;
  padding: 1rem;
`;

const PresentationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr min(64rem) 1fr;
`;

const PresentationCell = styled.div`
  grid-column: 2;
`;

const SlideIcons = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const App = () => {
  const { presenterMode, slides, slideId } = usePresentationStore(
    ({ presentation }) => ({
      presenterMode: presentation.presenterMode,
      slides: presentation.slides,
      slideId: presentation.slideId,
    })
  );
  usePresentationKeybinds();
  usePresentationQueryParams();
  return (
    <>
      {presenterMode ? (
        <DashboardGrid>
          <PresenterPresentationCell>
            <Presentation />
          </PresenterPresentationCell>
          <PreviewCell>
            <b>Preview</b>
            <Preview />
          </PreviewCell>
          <NotesCell>
            <b>Notes</b>
            <Notes />
          </NotesCell>
        </DashboardGrid>
      ) : (
        <PresentationGrid>
          <PresentationCell>
            <Presentation />
          </PresentationCell>
        </PresentationGrid>
      )}
      <SlideIcons>
        {slides.map((_, index) => (
          <b
            key={index}
            onClick={() => {
              usePresentationStore.actions.presentation.jumpTo(index, 0);
            }}
          >
            {slideId === index ? "O" : "o"}
          </b>
        ))}
      </SlideIcons>
    </>
  );
};

export default App;
