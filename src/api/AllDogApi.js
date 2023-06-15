import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";

export default function AllDogApi() {
  const { setDog, api } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(`/dogs`)

      .then((result) => {
        const data = result.data;

        setDog( data );
        console.log( data );
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
