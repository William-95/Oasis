import React,{useContext} from 'react';
import { StateContext } from '../SetContext';
import { useParams,useHistory } from 'react-router-dom';
import "../css/deleteDog.css";


export default function DeleteDog() {
const{api,user}=useContext(StateContext);
const{id_dog}=useParams();
const history=useHistory();


    const HandleSubmit = (event) => {
        event.preventDefault();
        // axios
        api({
            method: "delete",
            url: `/dogs/${id_dog}`,
            headers: { "Content-Type": "application/json" },
            
          })
            .then((result) => {
              if (result.status === 200) {
                alert('Cane rimosso dal nostro database.');
                history.push("/home/"+user.id);

              } else {
                alert('Il cane non si trova nelle nostre strutture, ci dispiace.');
              }
            })
            .catch((err) => console.log(err));
    }


  return (
    <div className='deleteBtn'>
       
            <button onClick={HandleSubmit}>Rimuovi cane</button>
        
    </div>
  )
}
