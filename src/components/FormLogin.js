import React, { useState } from "react";
import  LoginApi  from "../api/LoginApi";
// import { useHistory } from "react-router-dom";
// import { StateContext } from "../SetContext";
import "../css/form.css";

export default function FormLogin() {
  // const history = useHistory();
  // const { api,setUser } = useContext(StateContext);
  const [send, setSend] = useState(false);
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
    setSend(true);
  };
  // if (send === true) {
  //   LoginApi(data);
  // }
  return (
    <div className="form">
      {send ? <LoginApi dati={data} /> : null}

      <h3>Login</h3>
      <form onSubmit={HandleSubmit}>
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
                  onChange={HandleChange}
                  value={data.name}
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
                  onChange={HandleChange}
                  value={data.password}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="right">
                <button  className="secondaryBtn">Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
