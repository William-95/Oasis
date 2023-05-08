import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

export function LoginUser(dati) {
  const { api, setUser } = useContext(StateContext);
  const history = useHistory();

  /*requestApi*/

  api({
    method: "post",
    url: `/user`,
    headers: { "Content-Type": "application/json" },
    data: dati,
  })
    .then((result) => {
      if (result.status === 200) {
        const data = result.data;
        setUser(data);
        let userId = data[0].id;
        history.push("/home/" + userId);
      } else {
        console.log(result.data.message);
      }
    })
    .catch((err) => console.log(err));

  return <></>;
}

// ---------------// ---------------// ---------------// ---------------// ---------------

export default function RegisterUser({ dati }) {
  const { api, setUser } = useContext(StateContext);
  const history = useHistory();
  
  /*requestApi*/
  useEffect(() => {
    const controller = new AbortController();
   
    api({
      method: "post",
      url: `/users`,
      headers: { "Content-Type": "application/json" },
      data: dati,
      signal: controller.signal
      })
      .then((result) => {
        if (result.status === 200) {
          const data = result.data;
          setUser([
            {
              id: data.id,
              name: data.name,
              password: data.password,
            },
          ]);
          let userId = data.id;
          controller.abort();
          history.push("/home/" + userId);
          
        } else {
          alert(result.data.message);
        }
      })
     
       
     
      .catch((err) => console.log(err));
      
      
    // eslint-disable-next-line
  }, []);

  return <></>;
}
// ---------------// ---------------// ---------------// ---------------// ---------------// ---------------
