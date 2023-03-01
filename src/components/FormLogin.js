import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";
import '../css/form.css';
export default function FormLogin() {
  const { api } = useContext(StateContext);
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api({
      method: "post",
      url: `api/login.php`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then((result) => console.log(result.data.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
              <td colSpan={2} align="right">
                <button>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
