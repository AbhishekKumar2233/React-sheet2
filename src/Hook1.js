import { StrictMode } from "react";
import React, { useState } from "react";
import "./styles.css";

function Hook1() {
  const [count, setCount] = useState(0);

  //const[initialvalue,function]
  //o value is stored in count
  //setCount is a function

  // const rgb = [9,132,227];
  // console.log(rgb[0]);
  //simply use
  // const [red,green,blue,blur] = [9,132,227,1];
  // console.log(red,);
  // console.log(red,green);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  //using return not render
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default Hook1;
