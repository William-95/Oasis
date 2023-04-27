import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";


function DogApi() {
  const {  setDog,dog, api } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(`/dogs`)

      .then((response) => {
        setDog(response.data);
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dog);

  return <></>;
}


const DogRequest = { DogApi};
export default DogRequest;