import React,{} from "react";

export const DogContext = React.createContext();

export default function SetContext({ children }) {
  /*state*/
  
  
  /*Loading*/
  
  /*end Loading*/

  
  return (
    <>
      <DogContext.Provider
        value={{
          
        }}
      >
        {/* <Request.ClientApi /> */}
        {children}
      </DogContext.Provider>
    </>
  );
}
