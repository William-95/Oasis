import React from "react";
import headerBg from "../img/03.jpg";
import error from "../img/error.png";
import "../css/error.css";
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation(["error"]);
  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      ></header>

      <div className="error">
        <img src={error} className="errorImg" alt="" />
        <h4>{t("Abbiamo riscontrato un errore, prova:")}</h4>
        <ol>
          <li>{t("Controlla la tua connessione")}</li>
          <li>{t("Controlla di aver inserito correttamente i tuoi dati")}</li>
          <li>{t("Ricarica la pagina")}</li>
        </ol>
      </div>
    </div>
  );
}
