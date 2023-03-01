import React, { useContext } from "react";
import FormRegister from "../components/FormRegister";
import FormLogin from "../components/FormLogin";
import { StateContext } from "../SetContext";
import NavbarEntryPoint from "../components/NavEntryPoint";

export default function EntryPoint() {
  const { enterBtn } = useContext(StateContext);

  if (enterBtn.isOpen === "loginBtn") {
    return (
      <>
        <NavbarEntryPoint />
        <FormLogin />
      </>
    );
  } else if (enterBtn.isOpen === "registerBtn") {
    return (
      <>
        <NavbarEntryPoint />
        <FormRegister />
      </>
    );
  }

  return <></>;
}
