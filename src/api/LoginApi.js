import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function LoginApi({ dati }) {
  const { api, setUser, send, setSend,setIsLog} = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();

  

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;

      api({
        method: "post",
        url: `/user`,
        headers: { "Content-Type": "application/json" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            setIsLog(true);
            const data = result.data;
            setUser(data);
            let userId = data.id;
            history.push("/home/" + userId);
          } else {
            console.log(result.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
