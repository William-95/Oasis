import React, { useState, useContext, useEffect } from "react";
import "../css/navbar.css";
import classNames from "classnames";
import logo from "../img/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { Link } from "react-router-dom";
import { StateContext } from "../SetContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation(["common"]);
  const { user, setIsLog } = useContext(StateContext);
  const [state, setState] = useState({ isOpen: false });

  // translate
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.lenght > 2) {
      i18next.changeLanguage("it");
    }
    // eslint-disable-next-line
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  // end Translate

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

  const newUser = [{ ...user }];

  const handleToggle = () => {
    setState({ isOpen: !state.isOpen });
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="navCenter">
        <div className="navHeader">
          <Link to={`/home/${newUser[0].id}/`}>
            <img className="navLogo" src={logo} alt="" />
          </Link>
          <button type="button" className="navBtn" onClick={handleToggle}>
            <FaAlignRight className="navIcon" />
          </button>
        </div>

        <ul
          className={classNames("navLinks", { showNav: state.isOpen })}
          onClick={handleToggle}
        >
          <li>
            <Link to={`/home/${newUser[0].id}/`}>{t("Home")}</Link>
          </li>
          <li>
            <Link to="/list/">{t("Lista")}</Link>
          </li>
          <li>
            <Link to="/insertdog/">{t("Inserisci Cane")}</Link>
          </li>
          <li>
            <Link to="/findlostdog/">{t("Trova Cane")}</Link>
          </li>
          <li>
            <Link to={`/profile/${newUser[0].id}/`}>{t("Profilo")}</Link>
          </li>
          {/* <li>
            
          </li> */}
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsLog(false);
              }}
            >
              {t("Logout")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="translateBox1">
            <MdGTranslate className="translate1" />
            <select
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="it">{t("Italiano")}</option>
              <option value="en">{t("Inglese")}</option>
              <option value="es">{t("Spagnolo")}</option>
              <option value="de">{t("Tedesco")}</option>
            </select>
            </div>
    </nav>
  );
}
