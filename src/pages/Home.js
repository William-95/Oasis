import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/01.jpg";
import Course from "../components/Courses";
import Clinic from "../components/Clinic";
import Suggestion from "../components/Suggestion";
import Carousel from "../components/Carousel";

export default function Home() {
  const { user } = useContext(StateContext);
const newUser=[{...user}]
  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`
        }}
      >
        <h2>Benvenuto/a nella tua Home page, {newUser.name || newUser[0].name}</h2>
      </header>


      <div className="mb-28">
      <Carousel />
      </div>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 mb-20 pb-20">
      <Clinic />
      </div>

      <div className="mb-20">
      <Course />
      </div>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 p-0.5">
      <Suggestion />
      </div>
      
    </div>
  );
}
