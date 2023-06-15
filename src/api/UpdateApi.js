import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function UpdateApi({ id_user, dati }) {
  const { api, user, setUser, send, setSend } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();
  const newUser = [{...user}];
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
            const data = result.data;
            setUser([data]);
            alert("Utente modificato correttamente.");
            console.log(data);
            history.push(`/home/${newUser[0].id}`);
          } else {
            alert(result.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
