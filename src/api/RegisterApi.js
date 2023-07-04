import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function RegisterApi({ dati }) {
  const { api, setUser, setSend, send, setIsLog } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();
  /*requestApi*/

  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;

      if (
        dati.name === "" ||
        dati.email === "" ||
        dati.password === "" ||
        dati.confirm_password === ""
      ) {
        setSend(false);
        setUser("dati mancanti");
      } else {
        api({
          method: "post",
          url: `/users`,
          headers: { "Content-Type": "application/json" },
          data: dati,
        })
          .then((result) => {
            if (result.status === 200) {
              const results = result.data[0];
              const userLog = results.data;

              setSend(false);
              setIsLog(true);
              setUser(userLog);

              history.push("/home/" + userLog.id);
            } else {
              console.log(result.data.message);
            }
          })

          .catch((err) => {
            console.log(err.response.data);
            setSend(false);

            const response = err.response.data;
            setUser(response.message);
          });
      }
    }

    // eslint-disable-next-line
  }, []);

  return <></>;
}
