import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import '../css/form.css';
import { StateContext } from "../SetContext";

export default function FormRegister() {
  const history = useHistory();

  const { api } = useContext(StateContext);
  const [data, setData] = useState({
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

    if(data.password===data.confirm_password){
    api({
      method: "post",
      url: `/user`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then((result) => {
        if (result.status === 201) {
          history.push('/home/:id_user');
        }else{
          alert(result.message)
        }
      })
      .catch((err) => console.log(err));
  }else{
    alert('Please Confirm your password!')
  }
  };

  return (
    <div className="form">
      <h3>Register</h3>
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
                <label>Confirm Password:</label>
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
                <button>Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
