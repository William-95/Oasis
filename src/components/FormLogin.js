import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StateContext } from "../SetContext";
import "../css/form.css";

export default function FormLogin() {
  const history = useHistory();
 
  const { api,setUser } = useContext(StateContext);


  const [data, setData] = useState({
    id:'',
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

    
    // axios
    api({
      method: "post",
      url: `/user`,
      headers: { "Content-Type": "application/json" },
      data: data,
    })
      .then((result) => {
        if (result.status === 200) {
          const data=result.data;
          setUser(data);
          let userId=data[0].id;
          history.push("/home/"+userId);
        }else{
          console.log(result.data.message);
        }
      })
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
