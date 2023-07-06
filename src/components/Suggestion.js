import React from "react";
import "../css/feature.css";
import bugs from "../img/suggestions/no-bugs.png";
import parasol from "../img/suggestions/parasol.png";
import bowl from "../img/suggestions/pet-bowl.png";
import research from "../img/suggestions/research.png";
import temperature from "../img/suggestions/temperature-control.png";
import { useTranslation } from "react-i18next";

export default function Suggestion() {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <div className="featureIntro">
        <h3 className="borderSpacing pb-8" style={{ color: "#295d09" }}>
          {t("Suggerimenti per le vacanze")}
        </h3>
      </div>
      <div className="feature">
        <img src={temperature} alt="" />
        <p>{t("Suggerimento1")}</p>
      </div>

      <div className="feature reverse">
        <img src={bowl} alt="" />
        <p>{t("Suggerimento2")}</p>
      </div>

      <div className="feature">
        <img src={parasol} alt="" />
        <p>{t("Suggerimento3")}</p>
      </div>

      <div className="feature reverse">
        <img src={research} alt="" />
        <p>{t("Suggerimento4")}</p>
      </div>

      <div className="feature">
        <img src={bugs} alt="" />
        <p>{t("Suggerimento5")}</p>
      </div>
    </div>
  );
}
