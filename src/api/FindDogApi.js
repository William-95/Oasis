import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";

export default function FindDogApi({ dati }) {
  const { api, setFindDog, send, setSend, setNotFind } = useContext(
    StateContext
  );
  const ref = useRef();

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;
      api({
        method: "post",
        url: `/dog`,
        headers: { "Content-Type": "application/json" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            const results = result.data[0];
            
              const data = results.data;

            // if (data === "cane non trovato") {
            //   setNotFind(false);
            // } else {
              setFindDog(data);
              setNotFind(true);
            // }
          } else {
            console.log(
              "Il cane non si trova nelle nostre strutture, ci dispiace."
            );
          }
        })
        .catch((err) => {
          const response = err.response.data;
          if(response.message==='Cane non presente.'){
          setSend(false);
          setNotFind(false);
          } else {
          console.log(err);
        }
        });
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
