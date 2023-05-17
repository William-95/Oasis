import React,{useState,useContext} from 'react'
import { StateContext } from '../SetContext'
import "../css/form.css";
import FindDogApi from '../api/FindDogApi';

export default function FormFindDog() {
    const{send,setSend}=useContext(StateContext);
    const[data,setData]=useState({
        microchip:''
    });

    const HandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
      };
    
      const HandleSubmit = (event) => {
        event.preventDefault();
        setSend(!send);
       
        setTimeout(() => {
          setSend(!send);
        }, 200);
      };
    
  return (
    <div>
        <div className="form" style={{marginBottom:'7%'}}>
        {send ? <FindDogApi dati={data} /> : null}

        <h3>Cerca nelle nostre strutture</h3>
      <form onSubmit={HandleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Microchip:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="microchip"
                  onChange={HandleChange}
                  value={data.microchip}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="right">
                <button className="secondaryBtn">Cerca</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
  )
}
