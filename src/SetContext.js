import React, { useState } from "react";
// import Request from "./api/UserApi";
import DogRequest from "./api/DogApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
  });

  /*state*/
  const [dog, setDog] = useState([{}]);
  const [filterDog, setFilterDog] = useState([{}]);
  const [user, setUser] = useState([{}]);
  const [findDog, setFindDog] = useState({});
  const [enterBtn, setEnterBtn] = useState({ isOpen: "loginBtn" });
  const [send, setSend] = useState(false);

  // filter

  /*Loading*/

  /*end Loading*/

  return (
    <>
      <StateContext.Provider
        value={{
          api,
          user,
          setUser,
          enterBtn,
          setEnterBtn,
          dog,
          setDog,
          findDog,
          setFindDog,
          filterDog,
          setFilterDog,
          send,setSend
        }}
      >
        {/* <Request.UserApi /> */}
        <DogRequest.DogApi />
        {children}
      </StateContext.Provider>
    </>
  );
}
