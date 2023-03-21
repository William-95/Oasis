import React, { useContext } from "react";
import FormRegister from "../components/FormRegister";
import FormLogin from "../components/FormLogin";
import { StateContext } from "../SetContext";
import NavbarEntryPoint from "../components/NavEntryPoint";
import "../css/header.css";
import headerBg from "../img/02.jpg";



export default function EntryPoint() {
  const { enterBtn } = useContext(StateContext);

  if (enterBtn.isOpen === "loginBtn") {
    return (
      <>
        <NavbarEntryPoint />
        <header
          className="headerBg"
          style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <FormLogin />
        </header>
      </>
    );
  } else if (enterBtn.isOpen === "registerBtn") {
    return (
      <>
        <NavbarEntryPoint />
        <header className="headerBg" style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
          <FormRegister />
        </header>
      </>
    );
  }

  return <></>;
}
