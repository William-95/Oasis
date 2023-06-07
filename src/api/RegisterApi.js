import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function RegisterApi({ dati }) {
  const { api, setUser, setSend, send,setIsLog } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();
  /*requestApi*/

  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;
      api({
        method: "post",
        url: `/users`,
        headers: { "Content-Type": "application/json" },
        data: dati,
      })
        .then((result) => {
          if (result.status === 200) {
            setSend(false);
            setIsLog(true);
            const data = result.data;
            setUser([
              {
                id: data.id,
                name: data.name,
                password: data.password,
              },
            ]);

            let userId = data.id;
            history.push("/home/" + userId);
          } else {
            alert(result.data.message);
          }
        })

        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, []);

  return <></>;
}
