import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import UpdateApi from "../api/UpdateApi";
import "../css/enterForm.css";
import { useTranslation } from "react-i18next";

export default function FormUpdateUser() {
  const { t } = useTranslation(["common"]);
  const { send, setSend, user } = useContext(StateContext);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [spanConfirm, setSpanConfirm] = useState(false);
  const [spanEmail, setSpanEmail] = useState(false);

  useEffect(() => {
    if (user === "Email esistente.") {
      setSpanEmail(true);
    } else if (user === "Password non confermata.") {
      setSpanConfirm(true);
    }
  }, [user]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setSend(!send);
    }, 200);
  };
  return (
    <div className="formBox">
      <h3>{t("Modifica Profilo")}</h3>
      <form onSubmit={handleSubmit}>
        {send ? <UpdateApi id_user={id} dati={data} /> : null}
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
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <label>{t("Email")}</label>
          {spanEmail ? <span>{t("Email non valida")}</span> : null}
        </div>

        <div className="userBox">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <label>{t("Password")}</label>
        </div>

        <div className="userBox">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            value={data.confirm_password}
            required
          />
          <label>{t("Conferma Password")}</label>
          {spanConfirm ? <span>{t("Password non confermata")}</span> : null}
        </div>

        <button type="submit" className="secondaryBtn formBtn">
          {t("Modifica")}
        </button>
      </form>
    </div>
  );
}
