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

  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2>Benvenuto/a nella tua Home page, {user.name || user[0].name}</h2>
      </header>
      <Carousel />
      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 text-emerald-800">
      <Clinic />
      </div>
      <Course />
      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 p-0.5">
      <Suggestion />
      </div>
    </div>
  );
}
