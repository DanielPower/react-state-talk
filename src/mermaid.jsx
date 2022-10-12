import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({
  theme: "dark",
  securityLevel: "loose",
});

const Mermaid = ({ children }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);
  return <div className="mermaid">{children}</div>;
};

export default Mermaid;
