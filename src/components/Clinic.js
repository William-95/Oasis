import React from 'react'
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
            link:
              "https://www.cvrs.it/",
            summary:
              "Pronto soccorso veterinario H24 con sede a Roma Sud, con attrezzatura e metodi all'avanguardia. Il personale sempre disponibile ed attento.",
          },
          {
            icon:clinic02,
            title:"Qua La Zampa",
            link:"https://www.clinicaqualazampa.it/",
            summary:
            "Clinica Veterinaria con sede a Napoli che offre interventi specializzati e trattamenti personalizzati. La struttura non è H24, tuttavia fornisce un numero da poter contattare in caso di emergenza.",
    
          },
          {
            icon:clinic03,
            title:"MYVET",
            link:"https://www.myvetmilano.it/",
            summary:
            "Clinica Veterinaria con sede a Milano. Passione, professionalita ed entusiasmo è ciò che li caratterizza. Tuttavia la strussura non offre un servizio H24.",
          }
        ],
      };
      return (
        <div className="section">
          <h3>Cliniche Affiliate</h3>
    
          <div className="container">
            {state.clinic.map((item, index) => {
              return (
                <div key={index} className="cardCourse">
                  <h4>{item.title}</h4>
                  <img src={item.icon} alt="" />
                 
                   
                    <button className="secondaryBtn">
                    <a href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    >
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
