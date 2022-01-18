import React, { useState } from "react";

export default function RealTime() {
  const [time, setTime] = useState("Time");
  var clock = new Date().toLocaleTimeString();

  function timefunc() {
    setTime(clock);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timefunc}>Get Time</button>
    </div>
  );
}
