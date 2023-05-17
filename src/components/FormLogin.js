import React, { useState, useContext } from "react";
import LoginApi from "../api/LoginApi";
import { StateContext } from "../SetContext";
import "../css/enterForm.css";

export default function FormLogin() {
  const { send, setSend } = useContext(StateContext);
  const [data, setData] = useState({
    id: "",
    name: "",
    password: "",
  });

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setSend(!send);

    setTimeout(() => {
      setSend(!send);
    }, 200);
  };

  return (
    <div className="form-box">
      {send ? <LoginApi dati={data} /> : null}

      <h3>Login</h3>
      <form onSubmit={HandleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={HandleChange}
            required=""
          />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={HandleChange}
            required=""
          />
          <label>Password</label>
        </div>
        <button  type='submit' className="secondaryBtn form-btn">Login</button>
      </form>
    </div>
  );
}
