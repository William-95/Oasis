import React, { useContext } from "react";
import headerBg from "../img/03.jpg";
import "../css/header.css";
import FormFindDog from "../components/FormFindDog";
import OneDogCard from "../components/OneDogCard";
import { StateContext } from "../SetContext";

export default function FindLostDog() {
  const { findDog, notFind } = useContext(StateContext);

  if (findDog[0] === undefined) {
    return (
      <div>
        <header
          className="headerBg"
          style={{
            backgroundImage: `url(${headerBg})`,
          }}
        ></header>

        <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12 ">
          Hai smarrito il tuo cucciolo? Cercalo nelle nostre strutture!
        </h4>

        <FormFindDog />
      </div>
    );
  } else {
    return (
      <div>
        <header
          className="headerBg"
          style={{
            backgroundImage: `url(${headerBg})`,
          }}
        ></header>

        <h4 className=" borderSpacing text-3xl text-emerald-800 text-center m-14 pb-12">
          Hai smarrito il tuo cucciolo? Cercalo nelle nostre strutture!
        </h4>

        <FormFindDog />
        {notFind ? (
          <>
            <div className="bg-gradient-to-r from-lime-700 to-yellow-500 pt-0.5 pb-0.5">
              <OneDogCard
                name={findDog.name}
                race={findDog.race}
                sex={findDog.sex}
                size={findDog.size}
                img={findDog.img}
                microchip={findDog.microchip}
                region={findDog.region}
                structure={findDog.structure}
                contacts={findDog.contacts}
                date_birth={findDog.date_birth}
                date_entry={findDog.date_entry}
              />
            </div>
          </>
        ) : (
          <>
            <h3 className="text-center text-red-600 text-xl mb-6">
              Cane non trovato,inserire microchip valido.
            </h3>
          </>
        )}
      </div>
    );
  }
}
