import "./styles.css";
import Strike from "./Strike";
import RealTime from "./RealTime";
import Hook1 from "./Hook1";

export default function App() {
  var isDone = true;
  const strikeThrough = { textDecoration: "line-through" };

  return (
    <div className="App">
      {/* ui=f(state)
       */}
      <RealTime />
      <Hook1 />
      <h1 style={isDone ? strikeThrough : null}>State </h1>
      <h1 style={isDone && strikeThrough}>State </h1>
      {/* change background-color using btn */}
      <Strike />
      {/* <Hook1 /> */}
    </div>
  );
}
