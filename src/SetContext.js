import React,{useState} from "react";
import Request from "./api/UserApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api`
  });
  
  /*state*/
  const [state,setState]=useState({});
  const [user,setUser]=useState({});

  const [enterBtn,setEnterBtn]=useState({isOpen:'loginBtn'});
  

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
          setEnterBtn
        }}
      >
        <Request.UserApi />
        {children}
      </StateContext.Provider>
    </>
  );
}
