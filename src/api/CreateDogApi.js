import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function CreateDogApi({ dati }) {
  const { api, send, setSend } = useContext(StateContext);
  const ref = useRef();
  const history = useHistory();

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;
      api({
        method: "post",
        url: `/dogs`,
        headers: { "Content-Type": "multipart/form-data" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            alert("Canne Inserito Correttamente.");
            const data = result.data
            history.push(`/singledog/${data.id}`);

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
