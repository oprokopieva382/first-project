import React from "react";
import Accordion from "./Accordion";
import "./App.css";
import Header from "./Header";
import Rating from "./Rating";
import Technology from "./Technology";

function App() {
  console.log("App rendering");
  return (
    <div>
      <Header />
      <Technology />
      <Accordion titleValue={"Menu"} />
      <Accordion />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

export default App;
