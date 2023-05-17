import React, {useState, useContext } from "react";
import "../css/form.css";
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
    <div className="form">
      <h3>Registrati</h3>
      <form onSubmit={handleSubmit}>
        {send ? <RegisterApi dati={data} /> : null}
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>User Name:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Password:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Conferma Password:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="confirm_password"
                  onChange={handleChange}
                  value={data.confirm_password}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="right">
                <button type="submit" className="secondaryBtn" disabled={send}>
                  Registrati
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
