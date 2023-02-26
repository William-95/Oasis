import React, { useEffect,useContext } from 'react';
import FormRegister from '../components/FormRegister';
import FormLogin from '../components/FormLogin';
import { StateContext } from "../SetContext";
// import axios from 'axios';
// const api = axios.create();

export default function EntryPoint() {
  const {
    state,setState,api
  } = useContext(StateContext);
  // const [state,setState]=useState({});
  useEffect(() => {
   

  api
      .get(
        `http://localhost:80/oasis_db/api/read.php`
      )

      .then((response) => {
        setState(response);
      
      })

      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(state.data);
  return (
    <>
    
    <FormRegister/>
    <FormLogin/>
    </>
  )
}
