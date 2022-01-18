import React from "react";

function strikebtn() {
  document.getElementById("root").style.backgroundColor = "red";
}
function strikebtn1() {
  document.getElementById("root").style.backgroundColor = "#fff";
}
export default function Strike() {
  return (
    <div>
      <button onClick={strikebtn}>Change Background color</button>
      <button onClick={strikebtn1}>Remove Background color</button>
    </div>
  );
}
