import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import userEvent from "@testing-library/user-event";

function App() {
  return (
    <div>
      <NavBar />
      <Home
      name={user.name}
      city={user.city}
      color={user.color}
      />
      <About />
    </div>
  );
}

export default App;
