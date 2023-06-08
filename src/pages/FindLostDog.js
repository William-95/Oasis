import React, { useContext } from "react";
import headerBg from "../img/03.jpg";
import "../css/header.css";
import FormFindDog from "../components/FormFindDog";
import OneDogCard from "../components/OneDogCard";
import { StateContext } from "../SetContext";

export default function FindLostDog() {
  const { findDog } = useContext(StateContext);
  console.log(findDog);

  if (findDog[0] === undefined) {
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
        ></header>

        <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12 ">
          Hai smarrito il tuo cucciolo? Cercalo nelle nostre strutture!
        </h4>

        <FormFindDog />
        <h3 className="text-center text-red-600 text-xl mb-6">
          Cane non trovato,inserire microchip valido.
        </h3>
      </div>
    );
  } else {
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
        ></header>

        <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12">
          Hai smarrito il tuo cucciolo? Cercalo nelle nostre strutture!
        </h4>

        <FormFindDog />

        <div className="bg-gradient-to-r from-lime-700 to-yellow-500 pt-0.5 pb-0.5">
          <OneDogCard
            name={findDog[0].name}
            race={findDog[0].race}
            sex={findDog[0].sex}
            size={findDog[0].size}
            img={findDog[0].img}
            microchip={findDog[0].microchip}
            structure={findDog[0].structure}
            contacts={findDog[0].contacts}
            date_birth={findDog[0].date_birth}
            date_entry={findDog[0].date_entry}
          />
        </div>
      </div>
    );
  }
}
