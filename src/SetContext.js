import React,{useState} from "react";
import Request from "./api/UserApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  const api = axios.create({
    baseURL: `http://localhost:80/oasis_db/`,
  });
  /*state*/
  const [state,setState]=useState({});
  const [enterBtn,setEnterBtn]=useState({isOpen:'loginBtn'});
  

  /*Loading*/
  console.log(enterBtn);
  /*end Loading*/

  
  return (
    <>
      <StateContext.Provider
        value={{
          api,
          state,
          setState,
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
