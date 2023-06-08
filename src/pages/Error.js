import React from 'react'
import headerBg from "../img/03.jpg";
import error from "../img/error.png"
import "../css/error.css";

export default function Error() {
  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </header>

      <div className="error">
        <img src={error} className="errorImg" alt="" />
        <h4>Abbiamo riscontrato un errore, prova:</h4>
        <ol>
          <li>Controlla la tua connessione</li>
          <li>Controlla di aver inserito correttamente i tuoi dati</li>
          <li>Ricarica la pagina</li>
        </ol>
      </div>
    </div>
  )
}
