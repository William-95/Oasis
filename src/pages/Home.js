import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/01.jpg";
import Course from "../components/Courses";
import Clinic from "../components/Clinic";
import Suggestion from "../components/Suggestion";

export default function Home() {
  const { user } = useContext(StateContext);

  return (
    <div>
      <header className="headerBg" style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
        <h2>
          Welcome in your Home page, {user.name || user[0].name}
        </h2>
      </header>
      <Clinic/>
      <Course />
      <Suggestion/>
    </div>
  );
}
