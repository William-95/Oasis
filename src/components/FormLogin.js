import React, { useContext,useState } from "react";
import { useHistory } from "react-router-dom";

import { StateContext } from "../SetContext";
import "../css/form.css";

export default function FormLogin() {
  const history = useHistory();

  const { api,setUser } = useContext(StateContext);

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
    // axios

    api({
      method: "post",
      url: `/user`,
      headers: { "Content-Type": "application/json" },
      data: data,
    })
      .then((result) => {
        if (result.status === 200) {
          const data = result.data;
          setUser(data);
          let userId = data[0].id;
          history.push("/home/" + userId);

        } else {
          console.log(result.data.message);
        }
      })
      // .then(()=>{
      //   history.replace(`/profile/${user[0].id}`);
      //   history.push(`/home/${user[0].id}` );
      //   console.log(user);
      // })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
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
                <button className="secondaryBtn">Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
