import React, { useContext, useEffect } from "react";
import { StateContext } from "../SetContext";

// const api = axios.create({
//   baseURL: `http://127.0.0.1:8000/api`
// });

function UserApi() {
  const {  setState, api } = useContext(StateContext);

  /*requestApi*/
  useEffect(() => {
    api
      .get(`/users`)

      .then((response) => {
        setState(response.data);
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setState]);


  return <></>;
}

// function UserLogin(){
//   const {api,user,setUser} = useContext(StateContext);
//   const history = useHistory();

//   /*requestApi*/
//   useEffect(() => {

//   api.post(`/user`)

//     .then((result) => {
//       if (result.status === 200) {

//         let userId=user.id;
//         history.push("/home/"+userId);

//       }else{
//         console.log(result.data.message);
//       }
//     },[user],1000)
//     .catch((err) => console.log(err));
//     // eslint-disable-next-line
//   },[setUser,user])
// }

const Request = { UserApi };
export default Request;
