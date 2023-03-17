import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";
// import axios from "axios";


// const api = axios.create({
//   baseURL: `http://127.0.0.1:8000/api`
// });


function UserApi() {
 const {
    // state,
    setState,
    api
  } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(
        `/users`
      )

      .then((response) => {
        setState(response.data);
        
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setState]);


// console.log(state);


  return <></>;
}

// function UserCreate($data){
//   api({
//         method: "post",
//         url: `/user`,
//         headers: { "Content-Type": "application/json" },
//         data: $data
//       })
//     .then((result) => {
//       if (result.status === 201) {
//         alert('utente creato')
//       }else{
//         alert(result.message)
//       }
//     })
//     .catch((err) => console.log(err));
// }

const Request = { UserApi };
export default Request;