import React from "react";
import "../css/course.css";
import clicker from "../img/course/clicker1.jpg";
import disability from "../img/course/disability1.jpg";
import rescure from "../img/course/rescure1.jpg";

export default function Course() {
  let state = {
    course: [
      {
        icon: clicker,
        title: "Clicker Training",
        link:
          "https://canecampione.com/corso-istruttore-clicker-training/?gclid=EAIaIQobChMInLeyj8vy_QIVT-3tCh1wnQ-OEAAYASAAEgLWCvD_BwE",
        summary:
          "È un'esperienza attiva in cui padrone e cane collaborano tra loro come in un ballo di coppia.",
      },
      {
        icon: disability,
        title: "Assistenti per disabilità",
        link:
          "https://www.dobredog.it/formazione/specializzazioni/istruttore-tecnico-cinofilo-in-cani-da-assistenza-per-disabili-motori/",
        summary:
          "Permette di apprendere le conoscenze e le competenze indispensabili per progetto di cura di questo tipo.",
      },
      {
        icon: rescure,
        title: "Soccorso e Protezione Civile",
        link:
          "https://www.discoverydogs.it/addestramento-cani-da-soccorso-e-protezione-civile/",
        summary:
          "Metodologia della ricerca in superficie, nelle macerie, manovre di discesa e primo soccorso.",
      },
    ],
  };
  return (
    <div className="section">
      <h3 className="borderSpacing pb-8">Corsi Affiliati</h3>

      <div className="container">
        {state.course.map((item, index) => {
          return (
            <div key={index} className="cardCourse">
              <h4>{item.title}</h4>
              <img src={item.icon} alt="" />

              <button className="secondaryBtn">
                <a href={item.link} target="_blank" rel="noreferrer">
                  Altro
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
