import React, { useState, useContext, useEffect } from "react";
import "../css/enterForm.css";
import { StateContext } from "../SetContext";
import RegisterApi from "../api/RegisterApi";

export default function FormRegister() {
  const { send, setSend, user } = useContext(StateContext);

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  
  const [spanName, setSpanName] = useState(false);
  const [spanEmail, setSpanEmail] = useState(false);
  const [spanPassword, setSpanPassword] = useState(false);
  const [spanConfirm, setSpanConfirm] = useState(false);

  // useEffect(() => {
  //   if (data.name !== "") {
  //     setSpanName(false);
  //   }
  //   if (data.email !== "") {
  //     setSpanEmail(false);
  //   }
  //   if (data.password !== "") {
  //     setSpanPassword(false);
  //   }
  //   if (data.confirm_password !== "") {
  //     setSpanConfirm(false);
  //   }
  // }, [data]);

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

    if (data.name === "") {
      setSend(false);
      setSpanName(true);
    } else if (data.email === "") {
      setSend(false);
      setSpanEmail(true);
    } else if (data.password === "") {
      setSend(false);
      setSpanPassword(true);
    } else if (data.password !== data.confirm_password) {
      setSend(false);
      setSpanConfirm(true);
    } else {
      setSend(!send);
    }

    setTimeout(() => {
      setSend(!send);
    }, 200);

    // eslint-disable-next-line
  };

  return (
    <div className="formBox" style={{ margin: "0 auto 2%", padding: "3%" }}>
      <h3 className="text-xl">Registrati</h3>
      <form onSubmit={handleSubmit}>
        {send ? <RegisterApi dati={data} /> : null}

        <div className="userBox text-lg">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <label>Nome Utente</label>
          {spanName ? <span>Name mancante</span> : null}
        </div>

        <div className="userBox text-lg">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <label>Email</label>
          {spanEmail ? <span>Email mancante o esistente</span> : null}
        </div>

        <div className="userBox text-lg">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <label>Password</label>
          {spanPassword ? <span>Password mancante</span> : null}
        </div>

        <div className="userBox text-lg">
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

        <button type="submit" className="secondaryBtn formBtn text-base">
          Registrati
        </button>
      </form>
    </div>
  );
}
