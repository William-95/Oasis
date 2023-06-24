import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function CreateDogApi({ dati }) {
  const { api, send, setSend,setLoading,setSpanChip } = useContext(StateContext);
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
           
            console.log("Canne Inserito Correttamente.");
            const data = result.data;
            setLoading(false);
            history.push(`/singledog/${data.id}`);

          }else{
            console.log(result.data.message);
          }
        })
        .catch(err => {
          if (err.response && err.response.status === 500) {
            console.log("microchip esistente");
            setSend(false);
            setLoading(false);
            setSpanChip(true);
          } else {
            console.log(err);
          }
    })
  }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
