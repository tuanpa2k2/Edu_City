// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarComp from "./Components/Navbar/NavbarComp";
import HeroComp from "./Components/Hero/HeroComp";
import ProgramsComp from "./Components/Programs/ProgramsComp";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      <div className="container">
        <ProgramsComp />
      </div>
    </div>
  );
};

export default App;
