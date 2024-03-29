import React, { useContext, useState } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import "../css/enterForm.css";
import UpdateDogApi from "../api/UpdateDogApi";
import { useTranslation } from "react-i18next";

export default function UpdateDog() {
  const { t } = useTranslation(["dogform"]);
  const { send, setSend, spanChip } = useContext(StateContext);
  const { id_dog } = useParams();
  const [btn, setBtn] = useState({ isOpen: false });
  const [spanImg, setSpanImg] = useState(false);
  const [data, setData] = useState({
    id: "",
    name: "",
    sex: "",
    race: "",
    size: "",
    date_birth: "",
    microchip: "",
    date_entry: "",
    img: "",
    region: "",
    structure: "",
    contacts: "",
  });

  const handleFileChange = (event) => {
    setData((data) => ({ ...data, img: event.target.files[0] }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.img === "") {
      setSpanImg(true);
    } else {
      setSpanImg(false);
      setSend(!send);

      setTimeout(() => {
        setSend(!send);
      }, 1000);
    }
  };
  const handleToggle = () => {
    setBtn({ isOpen: !btn.isOpen });
  };

  return (
    <div>
      <div className="updateBtn">
        <button onClick={handleToggle}>{t("Modifica cane")}</button>
      </div>

      <div
        className={classNames("formBox no-showForm", { showForm: btn.isOpen })}
      >
        <h3>{t("Modifica cane")}</h3>
        <form onSubmit={handleSubmit}>
          {send ? <UpdateDogApi id_dog={id_dog} dati={data} /> : null}

          <div className="userBox">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
            />
            <label>{t("Nome")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="sex"
              onChange={handleChange}
              value={data.sex}
              required
            />
            <label>{t("Sesso")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="race"
              onChange={handleChange}
              value={data.race}
              required
            />
            <label>{t("Razza")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="size"
              onChange={handleChange}
              value={data.size}
              required
            />
            <label>{t("Stazza")}</label>
          </div>

          <div className="userBox dateBox">
            <input
              type="date"
              name="date_birth"
              onChange={handleChange}
              value={data.date_birth}
              required
            />
            <label>{t("Data di nascita")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="microchip"
              onChange={handleChange}
              value={data.microchip}
              required
            />
            <label>{t("Microchip")}</label>
            {spanChip ? (
              <span>{t("Microchip non valido o esistente")}</span>
            ) : null}
          </div>

          <div className="userBox dateBox">
            <input
              type="date"
              name="date_entry"
              onChange={handleChange}
              value={data.date_entry}
              required
            />
            <label>{t("Data di entrata")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="region"
              onChange={handleChange}
              value={data.region}
              required
            />
            <label>{t("Regione")}</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="structure"
              onChange={handleChange}
              value={data.structure}
              required
            />
            <label>{t("Struttura")}</label>
          </div>

          <div className="userBox">
            <input
              type="file"
              accept="image/*"
              name="img"
              multiple
              onChange={handleFileChange}
            />
            {spanImg ? <span>{t("Immagine mancante")}</span> : null}
          </div>

          <div className="userBox">
            <input
              type="text"
              name="contacts"
              onChange={handleChange}
              value={data.contacts}
              required
            />
            <label>{t("Contatti")}</label>
          </div>

          <button type="submit" className="secondaryBtn formBtn">
            {t("Modifica")}
          </button>
        </form>
      </div>
    </div>
  );
}
