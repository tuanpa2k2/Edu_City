// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/logo.png";
import "./NavbarComp.scss";

const NavbarComp = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Trang chủ</li>
        <li>Khóa học</li>
        <li>Liên hệ</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComp;
