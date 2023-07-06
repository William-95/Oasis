import React, { useState, useContext, useEffect } from "react";
import LoginApi from "../api/LoginApi";
import { StateContext } from "../SetContext";
import "../css/enterForm.css";
import { useTranslation } from "react-i18next";

export default function FormLogin() {
  const{t}=useTranslation(["common"]);
  const { send, setSend, user } = useContext(StateContext);
  const [data, setData] = useState({
    id: "",
    email: "",
    password: "",
  });
  const [spanEmail, setSpanEmail] = useState(false);
  const [spanPassword, setSpanPassword] = useState(false);

  useEffect(() => {
    if (user === "Email non registrata") {
      setSpanEmail(true);
    } else if (user === "Password errata") {
      setSpanPassword(true);
    }
  }, [user]);

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (data.email === "") {
      setSpanEmail(true);
    } else if (data.password === "") {
      setSpanPassword(true);
    } else {
      setSend(!send);
    }

    setTimeout(() => {
      setSend(!send);
    }, 200);
  };

  return (
    <div className="formBox" style={{ margin: "0 auto 2%", padding: "3%" }}>
      {send ? <LoginApi dati={data} /> : null}

      <h3 className="text-xl">{t("Login")}</h3>
      <form onSubmit={HandleSubmit}>
        <div className="userBox text-lg">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={HandleChange}
            required
          />
          <label>{t("Email")}</label>
          {spanEmail ? <span>{t('Email non valida')}</span> : null}
        </div>

        <div className="userBox text-lg">
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={HandleChange}
            required
          />
          <label>{t("Password")}</label>
          {spanPassword ? <span>{t('Password non valida')}</span> : null}
        </div>
        <button type="submit" className="secondaryBtn formBtn text-base">
          {t('Login')}
        </button>
      </form>
    </div>
  );
}
