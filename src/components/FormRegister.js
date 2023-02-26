import React, { useContext } from "react";
import { StateContext } from "../SetContext";

// import axios from 'axios';
export default function FormRegister() {
  // const [input,setInput]=useState({});
  // const api = axios.create({
  //     baseURL: ''
  //   });
  const { state, setState, api } = useContext(StateContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // setInput(values=>({...values,[name]:value}));
    setState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api.post("http://localhost:80/oasis_db/api/create.php", state);
    console.log(state);
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
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="email" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Password:</label>
              </th>
              <td>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Confirm Password:</label>
              </th>
              <td>
                <input
                  type="password"
                  name="confirm_password"
                  onChange={handleChange}
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
