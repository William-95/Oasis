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
              const data = result.data;

              if (
                data === "Email non registrata" ||
                data === "Password errata"
              ) {
                setSend(false);
                setUser({ data });
              } else {
                setSend(false);
                setIsLog(true);
                setUser(data);
                
                history.push("/home/" + data.id);
              }
            } else {
              console.log(result.data.message);
            }
          })
          .catch((err) => console.log(err));
      }
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
}
