import React,{} from "react";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  /*state*/
  
  
  /*Loading*/
  
  /*end Loading*/

  
  return (
    <>
      <StateContext.Provider
        value={{
          
        }}
      >
        {/* <Request.ClientApi /> */}
        {children}
      </StateContext.Provider>
    </>
  );
}
