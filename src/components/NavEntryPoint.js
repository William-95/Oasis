import React, { useContext, useEffect } from "react";
import "../css/navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { StateContext } from "../SetContext";

export default function NavbarEntryPoint() {
  const { setEntryNavBtn } = useContext(StateContext);

  // scolling
  useEffect(() => {
    let prevPos = window.scrollY;

    const handleScroll = () => {
      const currentPos = window.scrollY;

      if (prevPos > currentPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevPos = currentPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // end scolling

  const handleLogin = () => {
    setEntryNavBtn(true);
  };
  const handleRegister = () => {
    setEntryNavBtn(false);
  };

  // "navbar"

  return (
    <nav id="navbar" className="navbar">
      <div className="navCenter">
        <div className="navHeader">
          <Link to="/">
            <img className="navLogo" src={logo} alt="" />
          </Link>
          <div className="logger">
            <button type="button" className="primaryBtn" onClick={handleLogin}>
              Login
            </button>
            <button
              type="button"
              className="primaryBtn"
              onClick={handleRegister}
            >
              Registrati
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
