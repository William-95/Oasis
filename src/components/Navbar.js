import React, { Component} from "react";
import "../css/navbar.css";
import classNames from "classnames";
import logo from "../img/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  state={
    isOpen:false
  }
  handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen});
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navCenter">
          <div className="navHeader">
            <Link to="/home/:id_user">
              <img className="navLogo" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="navBtn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="navIcon" />
            </button>
          </div>

          
          <ul className={classNames('navLinks',{'showNav':this.state.isOpen})} onClick={this.handleToggle}>
            <li>
              <Link to="/home/:id_user">Home</Link>
            </li>
            <li>
              <Link to="/list/">List</Link>
            </li>
            <li>
              <Link to="/insertdog/">Insert Dog</Link>
            </li>
            <li>
              <Link to="/findlostdog/">Find Lost Dog</Link>
            </li>
            <li>
              <Link to="/profile/:id_user">Profile</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
