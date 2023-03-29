import React, { useContext} from "react";
import "../css/navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { StateContext } from "../SetContext";


export default function NavbarEntryPoint() {
    const { setEnterBtn} = useContext(StateContext);
const handleLogin=()=>{
    setEnterBtn({isOpen:'loginBtn'});
}
const handleLogout=()=>{
    setEnterBtn({isOpen:'registerBtn'});
    
}
    
  
    return (
      <nav className="navbar">
        <div className="navCenter">
          <div className="navHeader">
          <Link to="/">
              <img className="navLogo" src={logo} alt="" />
            </Link>
            <div className="logger">
            <button
              type="button"
              className="primaryBtn"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="primaryBtn"
              onClick={handleLogout}
            >
              Registrati
            </button>
          </div>
          </div>

          
          
        </div>
      </nav>
    );
  }

