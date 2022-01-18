import { StrictMode } from "react";
import React, { useState } from "react";

function Hook1() {
  const state = useState(0);

  function increase() {
    //count++;
  }

  //using return not render
  return (
    <StrictMode>
      <div className="container">
        <h1>{state[0]}</h1>
        <button onClick={increase}>+</button>
      </div>
    </StrictMode>
  );
}
export default Hook1;
