import React from "react";
import "./App.css";
import Header from "./Header";
import Technology from "./Technology";

function App() {
  console.log("App rendering");
  return (
    <div>
      <Header />
      <Technology />
    </div>
  );
}

export default App;
