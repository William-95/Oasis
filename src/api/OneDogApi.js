import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";

export default function OneDogApi({ id_dog }) {
  const { setOneDog, api } = useContext(StateContext);

  useEffect(() => {
    api
      .get(`/dog/${id_dog}`)

      .then((response) => {
        setOneDog(response.data);
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
