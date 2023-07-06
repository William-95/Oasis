import React from "react";
import "../css/feature.css";
import bathing from "../img/icon/bathing.png";
import bowl from "../img/icon/bowl.png";
import love from "../img/icon/love.png";
import medical from "../img/icon/medical.png";
import toy from "../img/icon/toy.png";
import { useTranslation } from "react-i18next";

export default function Feature() {
  const { t } = useTranslation(["entrypoint"]);
  return (
    <div>
      <div className="featureIntro">
        <h3 className="borderSpacing pb-8">{t("Servizi")}</h3>
      </div>

      <div className="feature">
        <img src={medical} alt="" />
        <p>{t("Feature1")}</p>
      </div>

      <div className="feature reverse">
        <img src={bowl} alt="" />
        <p>{t("Feature2")}</p>
      </div>

      <div className="feature">
        <img src={bathing} alt="" />
        <p>{t("Feature3")}</p>
      </div>

      <div className="feature reverse">
        <img src={love} alt="" />
        <p>{t("Feature4")}</p>
      </div>

      <div className="feature">
        <img src={toy} alt="" />
        <p>{t("Feature5")}</p>
      </div>
    </div>
  );
}
