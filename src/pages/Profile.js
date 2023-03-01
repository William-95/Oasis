import React,{useState,useContext} from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { api } = useContext(StateContext);
const {id_user}=useParams();
  const [data, setData] = useState({
    id:{id_user},
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
      url: `api/user/update.php`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then((result) => console.log(result.status))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <br/> <br/> <br/> <br/> <br/>
      <h2>Profile</h2>

      <h3>user_name</h3>
       
      <p>questa sezione è dedicata alla modifica de tui dati utente o alla cancellazione dell'account.</p>
      

      
      <div className="form">
        <h3>Update</h3>
      <form  onSubmit={handleSubmit}>
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
