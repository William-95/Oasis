import React, { useState,useContext} from "react";
import "../css/navbar.css";
import classNames from "classnames";
import logo from "../img/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link} from "react-router-dom";
import { StateContext } from "../SetContext";



export default function Navbar () {
  const { user } = useContext(StateContext);
 const [state,setState]=useState({isOpen:false })
  // const logUser=[...user,{
  //   id:user.id,
  //   name:user.name,
  //   email:user.email
  // }];
  // console.log(logUser);
 const handleToggle = () => {
    setState({isOpen:!state.isOpen});
  };

  
    return (
      <nav className="navbar">
        <div className="navCenter">
          <div className="navHeader">
            <Link to="/home/:id">
              <img className="navLogo" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="navBtn"
              onClick={handleToggle}
            >
              <FaAlignRight className="navIcon" />
            </button>
          </div>

          
          <ul className={classNames('navLinks',{'showNav':state.isOpen})} onClick={handleToggle}>
            <li>
              <Link to={`/home/${user.id}/`}>Home</Link>
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
              <Link to={`/profile/${user.id}/`}>Profilo</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }




// export default class Navbar extends Component {
 
//   state={
//     isOpen:false
//   }
//   handleToggle = () => {
//     this.setState({isOpen:!this.state.isOpen});
//   };

//   render() {
//     return (
//       <nav className="navbar">
//         <div className="navCenter">
//           <div className="navHeader">
//             <Link to="/home/:id">
//               <img className="navLogo" src={logo} alt="" />
//             </Link>
//             <button
//               type="button"
//               className="navBtn"
//               onClick={this.handleToggle}
//             >
//               <FaAlignRight className="navIcon" />
//             </button>
//           </div>

          
//           <ul className={classNames('navLinks',{'showNav':this.state.isOpen})} onClick={this.handleToggle}>
//             <li>
//               <Link to="/home/:id">Home</Link>
//             </li>
//             <li>
//               <Link to="/list/">List</Link>
//             </li>
//             <li>
//               <Link to="/insertdog/">Insert Dog</Link>
//             </li>
//             <li>
//               <Link to="/findlostdog/">Find Lost Dog</Link>
//             </li>
//             <li>
//               <Link to="/profile/:id">Profile</Link>
//             </li>
//             <li>
//               <Link to="/">Logout</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }