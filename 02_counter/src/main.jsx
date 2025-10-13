import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// createRoot() creates a React root — this is where React will manage your app’s virtual DOM tree.
// The virtual DOM (VDOM) is an in-memory representation of the actual DOM.
// So yes, when you call createRoot(), React prepares a virtual DOM structure under that root.

// ⚙️ How React updates work
// When your component’s state or props change, React re-renders that component in the virtual DOM (not in the real browser DOM yet).
// React then compares (diffs) the new virtual DOM with the previous one.
// It finds only the parts that changed.
// React updates only those parts in the real DOM — not the whole page.
// This process is called reconciliation.
