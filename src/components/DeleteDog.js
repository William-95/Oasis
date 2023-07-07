import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import "../css/singleDogBtn.css";
import DeleteDogApi from "../api/DeleteDogApi";
import { useTranslation } from "react-i18next";

export default function DeleteDog() {
  const { t } = useTranslation(["dogform"]);
  const { deleted, setDeleted } = useContext(StateContext);
  const { id_dog } = useParams();

  const HandleSubmit = (event) => {
    event.preventDefault();
    setDeleted(!deleted);

    setTimeout(() => {
      setDeleted(!deleted);
    }, 200);
  };

  return (
    <div className="deleteBtn">
      {deleted ? <DeleteDogApi id_dog={id_dog} /> : null}
      <button onClick={HandleSubmit}>{t("Rimuovi cane")}</button>
    </div>
  );
}
