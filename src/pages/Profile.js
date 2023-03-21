import React,{useState,useContext} from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const { api,user } = useContext(StateContext);
  const history = useHistory();

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

  // update user
  const handleSubmit = (event) => {
    event.preventDefault();

    if(data.password===data.confirm_password){
    api({
      method: "put",
      url: `/users/${user[0].id}`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
      .then((result) =>{
        if(result.status===200){
        alert('User update correctelly.');
      }else{
        alert(result.data.message)
      } 
     })
      .catch((err) =>console.log(err));
  }else{
    alert('Please confirm your password.')
  }
  }
  
  // deleteUser
  const handleDelete=()=>{
    api({
      method: "put",
      url: `/users/${user[0].id}`,
      headers: { "Content-Type": "application/json" },
      data: data
    })
    .then((result) =>{
      if(result.status===200){
     console.log('User delete correctelly.');
      history.push("/");
    }else{
      alert(result.data.message)
    } 
   })
    .catch((err) =>console.log(err));
  }
  return (
    <div>
      <br/> <br/> <br/> <br/> <br/>
      <h2>Profile</h2>

      <h3>Welcome {user[0].name}.</h3>
       
      <p>Questa sezione è dedicata alla modifica de tui dati utente o alla cancellazione dell'account.</p>
      

      
      <div className="form">
        <h3>Update Profile</h3>
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

      <div align='center' onClick={handleDelete}>
      <button  type="button" className="logBtn">
        Delete User
      </button>
      </div>
    </div>
  );
}
