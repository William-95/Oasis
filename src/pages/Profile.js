import React,{useState,useContext} from "react";
import { StateContext } from "../SetContext";

export default function Profile() {
  const { api,user } = useContext(StateContext);

  const [data, setData] = useState({
    id:'',
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
console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();

    api({
      method: "post",
      url: `/user/${user.id}`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then((result) => console.log(result.status))
      .catch((err) => console.log(err));
  }

  console.log(user);
  return (
    <div>
      <br/> <br/> <br/> <br/> <br/>
      <h2>Profile</h2>

      <h3>Welcome {user[0].name}.</h3>
       
      <p>Questa sezione è dedicata alla modifica de tui dati utente o alla cancellazione dell'account.</p>
      

      
      <div className="form">
        <h3>Update</h3>
      <form  onSubmit={handleSubmit}>
      <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>New User Name:</label>
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
                <label>New Email:</label>
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
                <label>New Password:</label>
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
                <button>Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>

      <div align='center'>
      <button  type="button" className="logBtn">
        Delete User
      </button>
      </div>
    </div>
  );
}
