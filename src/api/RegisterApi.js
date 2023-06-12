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
      } else {
        api({
          method: "post",
          url: `/users`,
          headers: { "Content-Type": "application/json" },
          data: dati,
        })
          .then((result) => {
            console.log(result);
            if (result.status === 200) {
              const data = result.data;

              if (data === "Password non confermata") {
                setSend(false);
                setUser({ data });
              } else {
                setSend(false);
                setIsLog(true);
                setUser(data);
                let userId = data.id;
                history.push("/home/" + userId);
              }
            } else {
              console.log(result.data.message);
            }
          })

          .catch((error) => {
            setSend(false);
            setUser({ data: "Email esistente" });
            console.log(error);
          });
      }
    }

    // eslint-disable-next-line
  }, []);

  return <></>;
}
