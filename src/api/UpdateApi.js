import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function UpdateApi({ id_user, dati }) {
  const { api, setUser, send, setSend } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();
  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;

      api({
        method: "put",
        url: `/users/${id_user}`,
        headers: { "Content-Type": "application/json" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            const results= result.data[0];
            const userLog=results.data;

            setUser(userLog);
            alert("Utente modificato correttamente.");
            
            history.push(`/home/${userLog.id}`);
          } else {
            console.log(result.data.message);
          }
        })
        .catch((err) =>{
          console.log(err.response.data);
          setSend(false);
          const response=err.response.data;
          setUser(response.message);
        });
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
