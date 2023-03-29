import React, { useContext, useEffect }  from 'react'
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function User() {
    const {  data,setUser, api } = useContext(StateContext);
    const history = useHistory();

    useEffect(() => {
// axios
    
api({
    method: "post",
    url: `/user`,
    headers: { "Content-Type": "application/json" },
    data: data,
  })
    .then((result) => {
      if (result.status === 200) {
        const data = result.data;
        setUser(data);
        let userId = data[0].id;
        history.push("/home/" + userId);
      } else {
        console.log(result.data.message);
      }
    })
    .catch((err) => console.log(err));

    // eslint-disable-next-line
    },[setUser])
  return <></>;
}
