import React, { useContext, useState, useEffect } from "react";
import headerBg from "../img/03.jpg";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import OneDogCard from "../components/OneDogCard";
import DeleteDog from "../components/DeleteDog";
import UpdateDog from "../components/UpdateDog";

export default function SingleDog() {
  const { id_dog } = useParams();
  const { api } = useContext(StateContext);
  const [oneDog, setOneDog] = useState({});

  useEffect(() => {
    api
      .get(`/dog/${id_dog}`)

      .then((response) => {
        setOneDog(response.data);
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <OneDogCard
        name={oneDog.name}
        race={oneDog.race}
        sex={oneDog.sex}
        size={oneDog.size}
        img={oneDog.img}
        microchip={oneDog.microchip}
        structure={oneDog.structure}
        contacts={oneDog.contacts}
        date_birth={oneDog.date_birth}
        date_entry={oneDog.date_entry}
      />

      <div>
        <UpdateDog />
        <DeleteDog />
      </div>
    </div>
  );
}
