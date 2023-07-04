import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";

export default function UpdateDogApi({ id_dog, dati }) {
  const { api, send, setSend ,setSpanChip} = useContext(StateContext);
  const ref = useRef();

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;

      api({
        method: "post",
        url: `/dogs/${id_dog}`,
        headers: { "Content-Type": "multipart/form-data" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            console.log("Canne Modificato Correttamente.");
            window.location.reload();
          } else {
            console.log(result.data.message);
          }
        })
        .catch((err) =>{
          console.log(err.response.data);
          
            const response = err.response.data;
            if(response.message==='Microchip esistente.'){
            setSend(false);
            setSpanChip(true);
            } 
        });
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
