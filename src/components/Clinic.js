import React from "react";
import "../css/course.css";
import clinic01 from "../img/clinic/clinic01.jpg";
import clinic02 from "../img/clinic/clinic02.jpg";
import clinic03 from "../img/clinic/clinic03.jpg";

export default function Clinic() {
  let state = {
    clinic: [
      {
        icon: clinic01,
        title: "CVRS",
        link: "https://www.cvrs.it/",
        summary:
          "Pronto soccorso veterinario H24 con sede a Roma Sud, con attrezzatura e metodi all'avanguardia.",
      },
      {
        icon: clinic02,
        title: "Qua La Zampa",
        link: "https://www.clinicaqualazampa.it/",
        summary:
          "Clinica Veterinaria con sede a Napoli. La struttura non è H24, ma fornisce un numero di emergenza.",
      },
      {
        icon: clinic03,
        title: "MYVET",
        link: "https://www.myvetmilano.it/",
        summary:
          "Clinica Veterinaria con sede a Milano. La strussura non offre un servizio H24.",
      },
    ],
  };
  return (
    <div className="section">
      <h3 className="borderSpacing pb-8" style={{ color: "#295d09" }}>
        Cliniche Affiliate
      </h3>

      <div className="container">
        {state.clinic.map((item, index) => {
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
