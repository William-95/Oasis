import React,{useState} from "react";
import Request from "./api/UserApi";
import DogRequest from "./api/DogApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api`
  });
  
  /*state*/
  const [state,setState]=useState({});
  const[dog,setDog]=useState({});
  const [user,setUser]=useState({});
  const [data,setData]=useState({
    id: "",
    name: "",
    password: ""
  });

  const [enterBtn,setEnterBtn]=useState({isOpen:'loginBtn'});
  // filter

  /*Loading*/
  
  /*end Loading*/

  
  return (
    <>
      <StateContext.Provider
        value={{
          api,
          state,
          setState,
          user,
          setUser,
          enterBtn,
          setEnterBtn,
          data,
          setData,
          dog,
          setDog
          
        }}
      >
       
        <Request.UserApi />
        <DogRequest.DogApi/>
        {children}
      </StateContext.Provider>
    </>
  );
}
