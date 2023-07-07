import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import DeleteApi from "../api/DeleteApi";
import "../css/singleDogBtn.css";
import { useTranslation } from "react-i18next";

export default function FormDeleteUser() {
  const { t } = useTranslation(["common"]);
  const { deleted, setDeleted } = useContext(StateContext);

  // deleteUser
  const handleDelete = (event) => {
    event.preventDefault();
    setDeleted(!deleted);

    setTimeout(() => {
      setDeleted(!deleted);
    }, 200);
  };
  return (
    <div className="deleteBtn self-center pb-12" onClick={handleDelete}>
      <button type="button">{t("Cancella Utente")}</button>
      {deleted ? <DeleteApi /> : null}
    </div>
  );
}
