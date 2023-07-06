import React from "react";
import "../css/course.css";
import clicker from "../img/course/clicker1.jpg";
import disability from "../img/course/disability1.jpg";
import rescure from "../img/course/rescure1.jpg";
import { useTranslation } from "react-i18next";

export default function Course() {
  const{t}=useTranslation(['home']);
  let state = {
    course: [
      {
        icon: clicker,
        title: "Clicker Training",
        link:
          "https://canecampione.com/corso-istruttore-clicker-training/?gclid=EAIaIQobChMInLeyj8vy_QIVT-3tCh1wnQ-OEAAYASAAEgLWCvD_BwE",
        summary:`${t('Corso1')}`,
      },
      {
        icon: disability,
        title: `${t("Assistenti per disabilità")}`,
        link:
          "https://www.dobredog.it/formazione/specializzazioni/istruttore-tecnico-cinofilo-in-cani-da-assistenza-per-disabili-motori/",
        summary:`${t('Corso2')}`,
      },
      {
        icon: rescure,
        title: `${t("Soccorso e Protezione Civile")}`,
        link:
          "https://www.discoverydogs.it/addestramento-cani-da-soccorso-e-protezione-civile/",
        summary:`${t('Corso3')}`,
      },
    ],
  };
  return (
    <div className="section">
      <h3 className="borderSpacing pb-8">{t('Corsi Affiliati')}</h3>

      <div className="container">
        {state.course.map((item, index) => {
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
