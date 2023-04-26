import React,{useState,useContext} from 'react'
import { StateContext } from '../SetContext'
import "../css/form.css";

export default function FormFindDog() {
    const{api, setFindDog}=useContext(StateContext);
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
        // axios
    
        api({
          method: "post",
          url: `/dog`,
          headers: { "Content-Type": "application/json" },
          data: data,
        })
          .then((result) => {
            if (result.status === 200) {
                const data=result.data;
              setFindDog(data);
            } else {
              alert('Il cane non si trova nelle nostre strutture, ci dispiace.');
            }
          })
          .catch((err) => console.log(err));
      };
    
  return (
    <div>
        <div className="form">
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
