import React, { useContext, useEffect } from "react";
import "../css/navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { StateContext } from "../SetContext";
import { MdGTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function NavbarEntryPoint() {
  const { i18n, t } = useTranslation(["common"]);

  const { setEntryNavBtn } = useContext(StateContext);

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
              {t("Login")}
            </button>
            <button
              type="button"
              className="primaryBtn"
              onClick={handleRegister}
            >
              {t("Registrati")}
            </button>
          
          <div>
            <MdGTranslate className="translate" />
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
        </div>
        </div>
      </div>
    </nav>
  );
}
