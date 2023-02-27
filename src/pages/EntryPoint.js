import React, {} from 'react';
import FormRegister from '../components/FormRegister';
import FormLogin from '../components/FormLogin';
// import { StateContext } from "../SetContext";


export default function EntryPoint() {
  // const {
  //   state,setState,api
  // } = useContext(StateContext);
  
  return (
    <>
    
    <FormRegister/>
    <FormLogin/>
    </>
  )
}
