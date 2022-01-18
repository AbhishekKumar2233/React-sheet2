import React, { useState } from "react";

export default function RealTime() {
  const [time, setTime] = useState(clock);

  //setinterval function used to show data every second
  setInterval(timefunc, 1000);

  var clock = new Date().toLocaleTimeString();

  function timefunc() {
    var newclock = new Date().toLocaleTimeString();
    setTime(newclock);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timefunc}>Get Time</button>
    </div>
  );
}
