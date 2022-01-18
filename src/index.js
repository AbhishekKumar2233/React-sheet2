import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

var count = 0;
function increase() {
  count++;
  console.log(count);
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
    <App />
  </StrictMode>,
  rootElement
);
