import React from "react";
import "../css/course.css";
import clinic01 from "../img/clinic/clinic01.jpg";
import clinic02 from "../img/clinic/clinic02.jpg";
import clinic03 from "../img/clinic/clinic03.jpg";
import { useTranslation } from "react-i18next";

export default function Clinic() {
  const{t}=useTranslation(['home']);
  let state = {
    clinic: [
      {
        icon: clinic01,
        title: "CVRS",
        link: "https://www.cvrs.it/",
        summary:`${t('Clinica1')}`,
      },
      {
        icon: clinic02,
        title: `${t("Qua La Zampa")}`,
        link: "https://www.clinicaqualazampa.it/",
        summary:`${t('Clinica2')}`,
      },
      {
        icon: clinic03,
        title: "MYVET",
        link: "https://www.myvetmilano.it/",
        summary:`${t('Clinica3')}`,
      },
    ],
  };
  return (
    <div className="section">
      <h3 className="borderSpacing pb-8" style={{ color: "#295d09" }}>
        {t('Cliniche Affiliate')}
      </h3>

      <div className="container">
        {state.clinic.map((item, index) => {
          return (
            <div key={index} className="cardCourse">
              <h4>{item.title}</h4>
              <img src={item.icon} alt="" />

              <button className="secondaryBtn">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {t('Altro')}
                </a>
              </button>
              <p>{item.summary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
