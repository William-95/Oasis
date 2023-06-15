import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";

export default function AllDogApi() {
  const { setDog, api } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(`/dogs`)

      .then((response) => {
        setDog(response.data);
        console.log(response.data);
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
