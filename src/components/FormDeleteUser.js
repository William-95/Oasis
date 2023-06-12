import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import DeleteApi from "../api/DeleteApi";
import "../css/singleDogBtn.css";

export default function FormDeleteUser() {
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
      <button type="button">Cancella Utente</button>
      {deleted ? <DeleteApi /> : null}
    </div>
  );
}
