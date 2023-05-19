import React, { useState, useContext } from "react";
import "../css/enterForm.css";
import { StateContext } from "../SetContext";
import RegisterApi from "../api/RegisterApi";

export default function FormRegister() {
  const { send, setSend } = useContext(StateContext);

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
      alert("Please Confirm your password!");
    }
    // eslint-disable-next-line
  };

  return (
    <div className="form-box">
      <h3>Registrati</h3>
      <form onSubmit={handleSubmit}>
        {send ? <RegisterApi dati={data} /> : null}

        <div className="user-box">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required=""
          />
          <label>Nome Utente</label>
        </div>

        <div className="user-box">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required=""
          />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required=""
          />
          <label>Password</label>
        </div>

        <div className="user-box">
          <input
            type="text"
            name="confirm_password"
            onChange={handleChange}
            value={data.confirm_password}
            required=""
          />
          <label>Conferma Password</label>
        </div>

        <button type="submit" className="secondaryBtn form-btn" disabled={send}>
          Registrati
        </button>
      </form>
    </div>
  );
}
