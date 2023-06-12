import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import Navbar from "./Navbar";
import NavEntryPoint from "./NavEntryPoint";

export default function NavSwitch() {
  const { isLog } = useContext(StateContext);

  return <>{isLog ? <Navbar /> : <NavEntryPoint />}</>;
}
