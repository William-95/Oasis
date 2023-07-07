import React, { useState, useContext, useEffect } from "react";
import "../css/enterForm.css";
import { StateContext } from "../SetContext";
import RegisterApi from "../api/RegisterApi";
import { useTranslation } from "react-i18next";

export default function FormRegister() {
  const { t } = useTranslation(["common"]);

  const { send, setSend, user } = useContext(StateContext);

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [spanName, setSpanName] = useState(false);
  const [spanEmail, setSpanEmail] = useState(false);
  const [spanPassword, setSpanPassword] = useState(false);
  const [spanConfirm, setSpanConfirm] = useState(false);

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

    if (data.name === "") {
      setSend(false);
      setSpanName(true);
    } else if (data.email === "") {
      setSend(false);
      setSpanEmail(true);
    } else if (data.password === "") {
      setSend(false);
      setSpanPassword(true);
    } else if (data.password !== data.confirm_password) {
      setSend(false);
      setSpanConfirm(true);
    } else {
      setSend(!send);
    }

    setTimeout(() => {
      setSend(!send);
    }, 200);

    // eslint-disable-next-line
  };

  return (
    <div className="formBox" style={{ margin: "0 auto 2%", padding: "3%" }}>
      <h3 className="text-xl">{t("Registrati")}</h3>
      <form onSubmit={handleSubmit}>
        {send ? <RegisterApi dati={data} /> : null}

        <div className="userBox text-lg">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <label>{t("Nome")}</label>
          {spanName ? <span>{t("Name mancante")}</span> : null}
        </div>

        <div className="userBox text-lg">
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

        <div className="userBox text-lg">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <label>{t("Password")}</label>
          {spanPassword ? <span>{t("Password non valida")}</span> : null}
        </div>

        <div className="userBox text-lg">
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

        <button type="submit" className="secondaryBtn formBtn text-base">
          {t("Registrati")}
        </button>
      </form>
    </div>
  );
}
