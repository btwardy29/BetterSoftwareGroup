import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import Splash from "./components/Splash/Splash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
