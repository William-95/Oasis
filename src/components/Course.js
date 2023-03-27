import React from "react";
import "../css/course.css";
import clicker from "../img/course/clicker.jpg";
import disability from "../img/course/disability.jpg";
import rescure from "../img/course/rescure.jpg";

export default function Course() {
  let state = {
    course: [
      {
        icon: clicker,
        title: "Clicker Training",
        link:
          "https://canecampione.com/corso-istruttore-clicker-training/?gclid=EAIaIQobChMInLeyj8vy_QIVT-3tCh1wnQ-OEAAYASAAEgLWCvD_BwE",
        summary:
          "Clicker training is an active experience in which subjects, owners and dogs, collaborate with each other as in a couple dance",
      },
      {
        icon:disability,
        title:"Assistance for Motor Disabilities",
        link:"https://www.dobredog.it/formazione/specializzazioni/istruttore-tecnico-cinofilo-in-cani-da-assistenza-per-disabili-motori/",
        summary:
        "It is a specific training protocol that allows you to learn the knowledge and technical/practical skills essential for the qualification of the man-dog couple in a care project of this type.",

      },
      {
        icon:rescure,
        title:"Rescure and Civil Protection",
        link:"https://www.discoverydogs.it/addestramento-cani-da-soccorso-e-protezione-civile/",
        summary:"The duo is trained on the methodology of research on the surface, on rubble, on cartography and use of GPS, first aid, psychology of the missing person, descent maneuvers.",
      }
    ],
  };
  return (
    <div className="section">
      <h3>Affiliate Course</h3>

      <div className="container">
        {state.course.map((item, index) => {
          return (
            <div key={index} className="cardCourse">
              <h4>{item.title}</h4>
              <img src={item.icon} alt="" />
             
               
                <button className="secondaryBtn">
                <a href={item.link}
                target="_blank"
                rel="noreferrer"
                >
                  More
                  
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
