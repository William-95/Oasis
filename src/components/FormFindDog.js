import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";
import "../css/enterForm.css";
import FindDogApi from "../api/FindDogApi";
import { useTranslation } from "react-i18next";

export default function FormFindDog() {
  const { t } = useTranslation(["dogform"]);
  const { send, setSend } = useContext(StateContext);
  const [data, setData] = useState({
    microchip: "",
  });

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setSend(!send);

    setTimeout(() => {
      setSend(!send);
    }, 200);
  };

  return (
    <div>
      <div className="formBox" style={{ marginBottom: "7%" }}>
        {send ? <FindDogApi dati={data} /> : null}

        <h3>{t("Cerca nelle nostre strutture")}</h3>
        <form onSubmit={HandleSubmit}>
          <div className="userBox">
            <input
              type="text"
              name="microchip"
              onChange={HandleChange}
              value={data.microchip}
              required
            />
            <label>{t("Microchip")}</label>
          </div>

          <button type="submit" className="secondaryBtn formBtn">
            {t("Cerca")}
          </button>
        </form>
      </div>
    </div>
  );
}
