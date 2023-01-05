import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Profile />
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
