import React from "react";
import "../styles.css";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      {" "}
      <p>Buy Milk</p>;<button onClick={strike}>Change to Strikethrough</button>
      <button onClick={unstrike}>Change back</button>
    </div>
  );
}

export default App;
