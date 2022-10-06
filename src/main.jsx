import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { usePresentationStore } from "crispy-presentation";
import slides from "./slides";

usePresentationStore.actions.presentation.loadPresentation(slides);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
