import React from "react";
import Left from "./components/left";
import Right from "./components/right";
import "./App.css";
import Search from "./components/search";

function App() {
  return (
    <div className="app">
      <Search />
      <div className="main">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
