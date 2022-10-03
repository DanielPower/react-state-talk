import React, { useEffect } from "react";
import createStore from "zustand-opine";

export const usePresentationStore = createStore({
  presentation: {
    initialState: {
      slideId: 0,
      stepId: 0,
      slides: [],
      presenterMode: false,
    },
    actions: {
      loadPresentation: (set) => (slides) =>
        set(({ presentation }) => {
          presentation.slideId = 0;
          presentation.stepId = 0;
          presentation.slides = slides;
        }),
      incrementStep: (set) => () =>
        set(({ presentation }) => {
          if (
            presentation.stepId <
            presentation.slides[presentation.slideId].steps - 1
          ) {
            presentation.stepId += 1;
          } else if (presentation.slideId < presentation.slides.length - 1) {
            presentation.slideId += 1;
            presentation.stepId = 0;
          }
        }),
      decrementStep: (set) => () =>
        set(({ presentation }) => {
          if (presentation.stepId > 0) {
            presentation.stepId -= 1;
          } else if (presentation.slideId > 0) {
            presentation.slideId -= 1;
            presentation.stepId =
              presentation.slides[presentation.slideId].steps - 1;
          }
        }),
      jumpTo: (set) => (slideId, stepId) =>
        set(({ presentation }) => {
          presentation.slideId = slideId;
          presentation.stepId = stepId;
        }),
      presenterModeToggled: (set) => () =>
        set(({ presentation }) => {
          presentation.presenterMode = !presentation.presenterMode;
        }),
    },
  },
});

export const usePresentationKeybinds = () => {
  const handlePresentationKeyboardEvents = (event) => {
    if (event.code === "ArrowRight" || event.code === "Space") {
      usePresentationStore.actions.presentation.incrementStep();
    } else if (event.code === "ArrowLeft") {
      usePresentationStore.actions.presentation.decrementStep();
    } else if (event.key === "f") {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.body.requestFullscreen();
      }
    } else if (event.key === "p") {
      usePresentationStore.actions.presentation.presenterModeToggled();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handlePresentationKeyboardEvents);
    return () => {
      document.removeEventListener("keydown", handlePresentationKeyboardEvents);
    };
  }, []);
};

export const usePresentationQueryParams = () => {
  const { slideId, stepId } = usePresentationStore(({ presentation }) => ({
    slideId: presentation.slideId,
    stepId: presentation.stepId,
  }));

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const querySlideId = parseInt(queryParams.get("slide"));
    if (!Number.isNaN(querySlideId)) {
      const queryStepId = parseInt(queryParams.get("step"));
      usePresentationStore.actions.presentation.jumpTo(
        querySlideId,
        Number.isNaN(queryStepId) ? 0 : queryStepId
      );
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("slide", slideId);
    queryParams.set("step", stepId);
    history.replaceState(null, null, `?${queryParams}`);
  }, [slideId, stepId]);
};

export const Presentation = () => {
  const { slideId, slides, stepId } = usePresentationStore(
    ({ presentation }) => ({
      stepId: presentation.stepId,
      slideId: presentation.slideId,
      slides: presentation.slides,
    })
  );
  const CurrentSlide = slides[slideId].component;
  return <CurrentSlide stepId={stepId} />;
};

export const Preview = () => {
  const { slideId, slides } = usePresentationStore(({ presentation }) => ({
    slideId: presentation.slideId,
    slides: presentation.slides,
  }));
  const { component: CurrentSlide, steps } = slides[slideId];
  return <CurrentSlide stepId={steps - 1} />;
};

export const Notes = () => {
  const { slideId, slides } = usePresentationStore(({ presentation }) => ({
    slideId: presentation.slideId,
    slides: presentation.slides,
  }));
  const notes = slides[slideId].notes;
  return notes ? list(notes) : null;
};

export const useSteppedValue = (stepId, initialStep, values) => {
  return values[Math.max(0, Math.min(stepId - initialStep, values.length - 1))];
};

export const simpleSlide = (steps, notes) => ({
  steps: steps.length,
  component: ({ stepId }) => React.Children.toArray(steps.slice(0, stepId + 1)),
  notes,
});

export const list = (items, style = "disc", depth = -1) => {
  return Array.isArray(items)
    ? items.map((item) => list(item, style, depth + 1)).flat()
    : [
        <li style={{ listStyleType: style, marginLeft: `${3 * depth}rem` }}>
          {items}
        </li>,
      ];
};
