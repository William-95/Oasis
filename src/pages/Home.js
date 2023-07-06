import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/01.jpg";
import Course from "../components/Courses";
import Clinic from "../components/Clinic";
import Suggestion from "../components/Suggestion";
import Carousel from "../components/Carousel";
import { useTranslation } from "react-i18next";

export default function Home() {
  const{t}=useTranslation(['home']);
  const { user } = useContext(StateContext);
  const newUser = [{ ...user }];
  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      >
        <h2>
          {t('Benvenuto/a nella tua Home page,')} {newUser.name || newUser[0].name}
        </h2>
      </header>

      <div className="mb-28">
        <Carousel />
      </div>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 mb-10 pb-40 ">
        <Clinic />
      </div>

      <div className="mb-10 pb-40">
        <Course />
      </div>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 p-0.5">
        <Suggestion />
      </div>
    </div>
  );
}
