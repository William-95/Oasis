import React, { useState, useContext } from 'react'
import { StateContext } from "../SetContext";
import UpdateApi from "../api/UpdateApi";
import "../css/enterForm.css";

export default function FormUpdateUser() {
    const { send, setSend} = useContext(StateContext);

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
    <div className="form-box">
        <h3>Modifica Profilo</h3>
        <form onSubmit={handleSubmit}>
          {send ? <UpdateApi dati={data} /> : null}
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
            <label>Nuova Email</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required=""
            />
            <label>Nuova Password</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
              value={data.confirm_password}
              required=""
            />
            <label>Conferma Password</label>
          </div>

          <button type="submit" className="secondaryBtn form-btn">
            Modifica
          </button>
        </form>
      </div>
  )
}
