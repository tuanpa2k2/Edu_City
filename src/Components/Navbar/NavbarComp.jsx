// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import "./NavbarComp.scss";

const NavbarComp = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Test</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComp;
