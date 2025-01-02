import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit Google",
};

function MyApp() {
  return (
    <div>
      <h1>This is custom react App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    visit Google
  </a>
);
const anotherUser="chai or code"
const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google",
  anotherUser
);
createRoot(document.getElementById("root")).render(
  //  AnotherElement
  // reactElement
  areactElement
  // <MyApp/>
  // <App/>
);
