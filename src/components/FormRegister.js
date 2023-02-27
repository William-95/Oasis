import React, { useState,useContext } from "react";
import { StateContext } from "../SetContext";
// import axios from 'axios';

export default function FormRegister() {
  
  const { api} = useContext(StateContext);
 const [data,setData]=useState({
  name : "",
  email:"",
  password:"",
  confirm_password:""
 });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData={
      name : data.name,
      email:data.email,
      password:data.password,
      confirm_password:data.confirm_password
    }
   
    api.post(`api/create.php`, sendData)
    .then((result)=>{
      if(result.status===200){
        console.log('ok ');
      }else{
        console.log(result.status);
      }
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className="form">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} >
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>User Name:</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} value={data.name} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="email" name="email" onChange={handleChange} value={data.email}/>
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
                  type="password"
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
