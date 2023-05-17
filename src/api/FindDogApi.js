import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";

export default function FindDogApi({dati}) {
    const { api,setFindDog, send, setSend } = useContext(StateContext);
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
              const data=result.data;
            setFindDog(data);
          } else {
            alert('Il cane non si trova nelle nostre strutture, ci dispiace.');
          }
        })
        .catch((err) => console.log(err));
    }
      // eslint-disable-next-line
    }, []);
    return <></>;
}
