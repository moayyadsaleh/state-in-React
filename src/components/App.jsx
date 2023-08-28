import React from "react";
import "../styles.css";

function App() {
  var isDone = true;
  const strikeThrough = { textDecoration: "line-through" };
  return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
}

export default App;
