import React,{useContext} from 'react';
import { StateContext } from "../SetContext";


export default function Home() {
  
  const { user } = useContext(StateContext);


  return (
    <div>

    <h2  style={{margin:'15%',alignContent:'center'}}>Welcome in your home page,{user[0].name}</h2>

    </div>
  )
}
