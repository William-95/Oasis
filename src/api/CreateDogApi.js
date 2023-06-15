import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";

export default function CreateDogApi({ dati }) {
  const { api, send, setSend } = useContext(StateContext);
  const ref = useRef();

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
      // multipart/form-data
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            alert("Canne Inserito Correttamente.");
          } else {
            console.log(result.data.message);
          }
        })
        .catch((err) => console.log(err.response.data));
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
