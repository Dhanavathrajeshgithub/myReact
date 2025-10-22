import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// In summary, @reduxjs/toolkit helps with the core Redux setup and logic,
// while react-redux enables React components to interact seamlessly with Redux state.
// Installing both packages is a common pattern in modern React-Redux applications to leverage the benefits of both libraries effectively.
