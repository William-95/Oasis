import React, { useState, useContext, useEffect } from "react";
import "../css/navbar.css";
import classNames from "classnames";
import logo from "../img/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { Link } from "react-router-dom";
import { StateContext } from "../SetContext";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { i18n } = useTranslation();
  const { user, setIsLog } = useContext(StateContext);
  const [state, setState] = useState({ isOpen: false });
  const [language,setLanguage]=useState("it");


  // translate
useEffect(()=>{
  i18n.changeLanguage(language);
  // eslint-disable-next-line
},[language]);
// end translate


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
            <Link to={`/home/${newUser[0].id}/`}>Home</Link>
          </li>
          <li>
            <Link to="/list/">Lista</Link>
          </li>
          <li>
            <Link to="/insertdog/">Inserisci Cane</Link>
          </li>
          <li>
            <Link to="/findlostdog/">Trova Cane</Link>
          </li>
          <li>
            <Link to={`/profile/${newUser[0].id}/`}>Profilo</Link>
          </li>
          <li>
          <MdGTranslate className="translate"/>
          <select onChange={(e) => setLanguage(e.target.value)}>
          <option value='it'>Italiano</option>
          <option value='en'>English</option>
          </select>
          </li>
          <li>           
            <Link
              to="/"
              onClick={() => {
                setIsLog(false);
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

