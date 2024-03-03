// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./NavbarComp.scss";

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  return (
    <nav className={`container ${scrolled ? "sticky_dark" : ""}`}>
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
