// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarComp from "./Components/Navbar/NavbarComp";
import HeroComp from "./Components/Hero/HeroComp";
import ProgramsComp from "./Components/Programs/ProgramsComp";
import TitleComp from "./Components/Title/TitleComp";
import AboutComp from "./Components/About/AboutComp";
import CampusComp from "./Components/Campus/CampusComp";

const App = () => {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      <div className="container">
        <TitleComp title="Lộ trình các khóa học" subTitle="Những kiến thức chúng tôi cung cấp" />
        <ProgramsComp />
        <AboutComp />
        <CampusComp />
      </div>
    </div>
  );
};

export default App;
