import React from "react";

export default function Hook1() {
  var count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
