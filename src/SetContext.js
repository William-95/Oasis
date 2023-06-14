import React, { useEffect, useState } from "react";
import AllDogApi from "./api/AllDogApi";
import axios from "axios";

export const StateContext = React.createContext();

export default function SetContext({ children }) {
  const api = axios.create({
    baseURL: `https://oasis-db-production.up.railway.app/api`,
  });

  /*state*/
  const [loading, setLoading] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const [dog, setDog] = useState([{}]);
  const [oneDog, setOneDog] = useState([{}]);
  const [filterDog, setFilterDog] = useState([{}]);
  const [user, setUser] = useState([{}]);
  const [findDog, setFindDog] = useState({});
  const [entryNavBtn, setEntryNavBtn] = useState(true);
  const [send, setSend] = useState(false);
  const [deleted, setDeleted] = useState(false);

  
  // save state user
  useEffect(() => {
    const data =JSON.parse(window.localStorage.getItem("USER"));
    if (data !== null) {
      setUser(data);
    }
    
  }, []);

  useEffect(() => {

    window.localStorage.setItem("USER", JSON.stringify(user));
  }, [user]);

  // end save state user

  // save state log
  useEffect(() => {
    const data = window.localStorage.getItem("LOGGER");

    if (data !== null) {
      setIsLog(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("LOGGER", isLog);
  }, [isLog]);

  // end save state log

  
  return (
    <>
      <StateContext.Provider
        value={{
          api,
          loading,
          setLoading,
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
