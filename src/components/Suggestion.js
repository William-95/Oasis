import React from "react";
import "../css/feature.css";
import bugs from "../img/suggestions/no-bugs.png";
import parasol from "../img/suggestions/parasol.png";
import bowl from "../img/suggestions/pet-bowl.png";
import research from "../img/suggestions/research.png";
import temperature from "../img/suggestions/temperature-control.png";

export default function Suggestion() {
  return (
    <div>
      <div className="featureIntro" style={{color:'#af9a7d'}}>
        <h3>Suggerimenti per le vacanze</h3>
      </div>
      <div className="feature">
        <img src={temperature} alt="" />
        <p>
          In auto il cane deve poter viaggiare comodo, in sicurezza e alle
          giusta temperatura.
        </p>
      </div>

      <div className="feature reverse">
        <img src={bowl} alt="" />
        <p>
          Durante il tragitto assicurarsi di fare un pò di soste per dargli da
          bere, farlo muovere e fare i bisogni.
        </p>
      </div>

      <div className="feature">
        <img src={parasol} alt="" />
        <p>
          Sia che si vada al mare che in montagna avere sempre dietro acqua e
          assicurarsi di tenerlo all'ombra nelle ore più calde per evitare colpi
          di calore e ustioni ai cuscinetti.
        </p>
      </div>

      <div className="feature reverse">
        <img src={research} alt="" />
        <p>
          Informarsi sempre se nel posto in cui si va c'è particolare rischio di
          alcune malattie come per esempio la leishmaniosi e usare
          preventivamente i prodotti adeguati.
        </p>
      </div>

      <div className="feature">
        <img src={bugs} alt="" />
        <p>
          Se si va in montagna controllare sempre al rientro dalla passeggiata
          che non si siano attaccate zecche o altri parassiti.
        </p>
      </div>
    </div>
  );
}
