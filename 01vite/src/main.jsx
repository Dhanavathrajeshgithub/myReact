import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function CustomComponent() {
  return <div>This is custom component</div>;
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   childern: "Click me to visit google",
// };
// const anotherElement = (
//   <>
//     <a href="https://www.google.com" target="_blank">
//       Visit Google
//     </a>
//   </>
// );

const variable = "Rajesh";
const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit google",
  variable
);
createRoot(document.getElementById("root")).render(
  // CustomComponent() // This will work
  // <CustomComponent /> // This will also work
  reactElement
  // anotherElement
  //<App />
);
