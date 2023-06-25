import React, { useContext } from "react";
import headerBg from "../img/03.jpg";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import OneDogCard from "../components/OneDogCard";
import OneDogApi from "../api/OneDogApi";
import DeleteDog from "../components/DeleteDog";
import UpdateDog from "../components/UpdateDog";

export default function SingleDog() {
  const { id_dog } = useParams();
  const { oneDog } = useContext(StateContext);

  return (
    <div>
      <OneDogApi id_dog={id_dog} />
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      ></header>

      <div className="bg-gradient-to-r from-lime-700 to-yellow-500 rounded-b-[50px] mb-10 p-0.5">
        <OneDogCard
          name={oneDog.name}
          race={oneDog.race}
          sex={oneDog.sex}
          size={oneDog.size}
          img={oneDog.img}
          microchip={oneDog.microchip}
          region={oneDog.region}
          structure={oneDog.structure}
          contacts={oneDog.contacts}
          date_birth={oneDog.date_birth}
          date_entry={oneDog.date_entry}
        />
      </div>
      <div>
        <UpdateDog />
        <DeleteDog />
      </div>
    </div>
  );
}
