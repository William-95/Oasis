import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";


function UserApi() {
 const {
    state,
    setState,
    api
  } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(
        `api/user/read.php`
      )

      .then((response) => {
        setState(response.data);
        
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setState]);
console.log(state);
  return <></>;
}

const Request = { UserApi };
export default Request;