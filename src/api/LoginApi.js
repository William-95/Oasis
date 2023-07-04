import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "../SetContext";
import { useHistory } from "react-router-dom";

export default function LoginApi({ dati }) {
  const { api, setUser, send, setSend, setIsLog } = useContext(StateContext);
  const history = useHistory();
  const ref = useRef();

  /*requestApi*/
  useEffect(() => {
    if (ref.current !== send) {
      ref.current = send;

      if (dati.email === "" || dati.password === "") {
        setSend(false);
      } else {
        api({
          method: "post",
          url: `/user`,
          headers: { "Content-Type": "application/json" },
          data: dati,
        })
          .then((result) => {
            if (result.status === 200) {
              
              const results= result.data[0];
              const userLog=results.data;
              // if (
              //   userLog.message === "Email non registrata" ||
              //   userLog.message === "Password errata"
              // ) {
              //   setSend(false);
              //   setUser(userLog.message);
              // } else {
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
            const response=err.response.data;
           setUser(response.message);
          });
      }
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
