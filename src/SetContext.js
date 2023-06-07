import React, { useState } from "react";
import AllDogApi from "./api/AllDogApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
  });

  /*state*/
  const [isLog,setIsLog]=useState(false)
  const [dog, setDog] = useState([{}]);
  const [oneDog, setOneDog] = useState([{}]);
  const [filterDog, setFilterDog] = useState([{}]);
  const [user, setUser] = useState([{}]);
  const [findDog, setFindDog] = useState({});
  const [entryNavBtn, setEntryNavBtn] = useState(true);
  const [send, setSend] = useState(false);
  const [deleted, setDeleted] = useState(false);

  // filter

  /*Loading*/

  /*end Loading*/

  return (
    <>
      <StateContext.Provider
        value={{
          api,
          isLog,
          setIsLog,
          user,
          setUser,
          entryNavBtn,
          setEntryNavBtn,
          dog,
          setDog,
          oneDog,
          setOneDog,
          findDog,
          setFindDog,
          filterDog,
          setFilterDog,
          send,
          setSend,
          deleted,
          setDeleted,
        }}
      >
        <AllDogApi />
        {children}
      </StateContext.Provider>
    </>
  );
}
