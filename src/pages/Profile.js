import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import headerBg from "../img/01.jpg";

import FormUpdateUser from "../components/FormUpdateUser";
import FormDeleteUser from "../components/FormDeleteUser";

export default function Profile() {
  const { user } = useContext(StateContext);

  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`
        }}
      >
        <h2>Questa è la tua area riservata, {user.name || user[0].name}</h2>
      </header>

      <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12 ">
        Questa sezione è dedicata alla modifica dei tuoi dati utente o alla
        cancellazione dell'account.
      </h4>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 p-4">
        <FormUpdateUser />
        <FormDeleteUser />
      </div>
    </div>
  );
}
