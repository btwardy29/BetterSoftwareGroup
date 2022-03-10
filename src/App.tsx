import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Splash from "./components/Splash/Splash";

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
      <Splash />
    </div>
  );
}

export default App;
