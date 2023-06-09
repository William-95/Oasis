import React from "react";
import headerBg from "../img/03.jpg";
import "../css/header.css";
import FormInsertDog from "../components/FormInsertDog";

export default function InsertDog() {
  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`
        }}
      ></header>

      <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12 ">
        Hai trovato un amico a quattro zampe? Aiutalo a trovare una nuova casa
        inserendolo nel nostro database!
      </h4>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 pt-0.5 pb-0.5">
        <FormInsertDog />
      </div>
    </div>
  );
}
