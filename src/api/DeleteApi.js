import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function DeleteApi() {
  const { api, user, deleted, setDeleted } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== deleted) {
      ref.current = deleted;

      api({
        method: "delete",
        url: `/users/${user.id}`,
        headers: { "Content-Type": "application/json" },
      })
        .then((result) => {
          if (result.status === 200) {
            setDeleted(false);
            alert("Utente eliminato correttamente.");
            history.push("/");
          } else {
            console.log(result.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
