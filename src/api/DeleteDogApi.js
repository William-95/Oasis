import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";
import AllDogApi from "./AllDogApi";

export default function DeleteDogApi({id_dog}) {
    const { api, user,deleted,setDeleted} = useContext(StateContext);
    const history = useHistory();
    const ref = useRef();

    const newUser=[{...user}];
    
    /*requestApi*/
    useEffect(() => {
      if (ref.current !== deleted) {
        ref.current = deleted;
  
        api({
            method: "delete",
            url: `/dogs/${id_dog}`,
            headers: { "Content-Type": "application/json" },
            
          })
            .then((result) => {
              if (result.status === 200) {
                setDeleted(false);
                alert('Cane rimosso dal nostro database.');
                history.push(`/home/${newUser[0].id}/`);

              } else {
                alert('Il cane non si trova nelle nostre strutture, ci dispiace.');
              }
            })
            .catch((err) => console.log(err));
      }
      // eslint-disable-next-line
    }, []);
    return <><AllDogApi/></>;
}
