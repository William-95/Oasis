import React, { useContext } from "react";
import FormRegister from "../components/FormRegister";
import FormLogin from "../components/FormLogin";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/02.jpg";
import Feature from "../components/Feature";

export default function EntryPoint() {
  const { entryNavBtn } = useContext(StateContext);

  return (
    <>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`
        }}
      >
        {entryNavBtn ? <FormLogin /> : <FormRegister />}
      </header>

      <Feature />
    </>
  );
}
