import React, { useState, useEffect,useContext } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import UpdateApi from "../api/UpdateApi";
import "../css/enterForm.css";

export default function FormUpdateUser() {
  const { send, setSend,user } = useContext(StateContext);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [spanConfirm, setSpanConfirm] = useState(false);
  const [spanEmail, setSpanEmail] = useState(false);

  useEffect(() => {
    if (user === "Email esistente.") {
      setSpanEmail(true);
    }
    else if (user === "Password non confermata.") {
      setSpanConfirm(true);
    }
    
  }, [user]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (data.password === data.confirm_password) {
    //   setSend(!send);

      setTimeout(() => {
        setSend(!send);
      }, 200);
    // } else {
    //   alert("Password non confermata!");
    // }
  };
  return (
    <div className="formBox">
      <h3>Modifica Profilo</h3>
      <form onSubmit={handleSubmit}>
        {send ? <UpdateApi id_user={id} dati={data} /> : null}
        <div className="userBox">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <label>Nome Utente</label>
        </div>
        <div className="userBox">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <label>Nuova Email</label>
          {spanEmail ? <span>Email mancante o esistente</span> : null}
        </div>

        <div className="userBox">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <label>Nuova Password</label>
        </div>

        <div className="userBox">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            value={data.confirm_password}
            required
          />
          <label>Conferma Password</label>
          {spanConfirm ? <span>Password non confermata</span> : null}
        </div>

        <button type="submit" className="secondaryBtn formBtn">
          Modifica
        </button>
      </form>
    </div>
  );
}
