import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";
import UpdateApi from "../api/UpdateApi";
import DeleteApi from "../api/DeleteApi";
import "../css/enterForm.css";
import "../css/deleteDog.css";

export default function Profile() {
  const { user, send, setSend, deleted, setDeleted } = useContext(StateContext);

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

  // update user
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

  // deleteUser
  const handleDelete = (event) => {
    event.preventDefault();
    setDeleted(!deleted);

    setTimeout(() => {
      setDeleted(!deleted);
    }, 200);
  };
  return (
    <div>
      <br /> <br /> <br /> <br /> <br />
      <h2>Profilo</h2>
      <h3>Benvenuto/a {user[0].name}.</h3>
      <p>
        Questa sezione è dedicata alla modifica dei tuoi dati utente o alla
        cancellazione dell'account.
      </p>
      <div className="form-box">
        <h3>Update Profile</h3>
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
              type="text"
              name="email"
              onChange={handleChange}
              value={data.email}
              required=""
            />
            <label>Nuova Email</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={data.password}
              required=""
            />
            <label>Nuova Password</label>
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

          <button type="submit" className="secondaryBtn form-btn">
            Update
          </button>
        </form>
      </div>
      <div align="center" className="deleteBtn" onClick={handleDelete}>
        <button type="button" >
          Cancella Utente
        </button>
        {deleted ? <DeleteApi /> : null}
      </div>
    </div>
  );
}
