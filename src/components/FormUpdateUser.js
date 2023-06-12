import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import UpdateApi from "../api/UpdateApi";
import "../css/enterForm.css";

export default function FormUpdateUser() {
  const { send, setSend } = useContext(StateContext);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.password === data.confirm_password) {
      setSend(!send);

      setTimeout(() => {
        setSend(!send);
      }, 200);
    } else {
      alert("Password non confermata!");
    }
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
          />
          <label>Nome Utente</label>
        </div>
        <div className="userBox">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <label>Nuova Email</label>
        </div>

        <div className="userBox">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <label>Nuova Password</label>
        </div>

        <div className="userBox">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            value={data.confirm_password}
          />
          <label>Conferma Password</label>
        </div>

        <button type="submit" className="secondaryBtn formBtn">
          Modifica
        </button>
      </form>
    </div>
  );
}
