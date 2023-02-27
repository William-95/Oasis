import React, { useContext, useEffect } from "react";
// import axios from "axios";
import { StateContext } from "../SetContext";

/*axios*/
// const api = axios.create({
//     baseURL: `http://localhost:80/`,
  
//   });


/*UserAPI Function*/
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
        `api/read.php`
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