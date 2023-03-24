import React from "react";
import "../css/course.css";
import clicker from "../img/course/clicker.jpg";

export default function Course() {
  return (
    <div>
      <h3>Affiliate Course</h3>

      <div className="cardCourse">
        <h4>Clicker Training</h4>
        <img src={clicker} alt="" />
        <button className="primaryBtn">
          <a href="https://canecampione.com/corso-istruttore-clicker-training/?gclid=EAIaIQobChMInLeyj8vy_QIVT-3tCh1wnQ-OEAAYASAAEgLWCvD_BwE">
            More
            </a>
        </button>
        <p>
        Clicker training is an active experience 
        in which subjects, owners and dogs, 
        collaborate with each other as in a 
        couple dance
        </p>
      </div>
    </div>
  );
}
