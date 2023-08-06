import React from "react";
import { Link } from "react-router-dom";

import Stopwatch from "./components/Stopwatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/path/to/page">Click me</Link>
      <Stopwatch />
    </div>
  );
}

export default App;
