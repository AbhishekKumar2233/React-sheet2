import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Hook1 from "./Hook1";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hook1 />
    <App />
  </StrictMode>,
  rootElement
);
