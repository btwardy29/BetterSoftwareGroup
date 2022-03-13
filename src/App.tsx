import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Player from "./components/Player/Player";
import Splash from "./components/Splash/Splash";
import ProtectedRoutes from "./hoc/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
