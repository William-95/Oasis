import React,{useState} from "react";
import axios from 'axios';

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  const api = axios.create();
  /*state*/
  const [state,setState]=useState({});
  
  /*Loading*/
  
  /*end Loading*/

  
  return (
    <>
      <StateContext.Provider
        value={{
          api,
          state,
          setState
        }}
      >
        {/* <Request.ClientApi /> */}
        {children}
      </StateContext.Provider>
    </>
  );
}
