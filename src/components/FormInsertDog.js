import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";
import CreateDogApi from "../api/CreateDogApi";
import "../css/enterForm.css";
import AllDogApi from "../api/AllDogApi";
import Loading from "./Loading";

export default function FormInsertDog() {
  const { send, setSend, loading, setLoading } = useContext(StateContext);
  const [spanImg, setSpanImg] = useState(false)

  const [data, setData] = useState({
    id: "",
    name: "",
    sex: "",
    race: "",
    size: "",
    date_birth: "",
    microchip: "",
    date_entry: "",
    img: "",
    region: "",
    structure: "",
    contacts: "",
  });

  const handleFileChange = (event) => {
    setData((data) => ({ ...data, img: event.target.files[0] }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data.img===""){
setSpanImg(true)
    }else{
      setSend(!send);
      setLoading(true);
  
      setTimeout(() => {
        setSend(!send);
      }, 200);
    }

  };
  return (
    <div className="formBox">
      <h3>Inserisci un cane</h3>
      <form onSubmit={handleSubmit}>
        {send ? (
          <>
            <CreateDogApi dati={data} />
            <AllDogApi />
          </>
        ) : null}
        <div className="userBox">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            required
          />
          <label>Nome</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="sex"
            onChange={handleChange}
            value={data.sex}
            required
          />
          <label>Sesso</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="race"
            onChange={handleChange}
            value={data.race}
            required
          />
          <label>Razza</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="size"
            onChange={handleChange}
            value={data.size}
            required
          />
          <label>Stazza</label>
        </div>

        <div className="userBox dateBox">
          <input
            type="date"
            name="date_birth"
            onChange={handleChange}
            value={data.date_birth}
            required
          />
          <label>Data di nascita</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="microchip"
            onChange={handleChange}
            value={data.microchip}
            required
          />
          <label>Microchip</label>
        </div>

        <div className="userBox dateBox">
          <input
            type="date"
            name="date_entry"
            onChange={handleChange}
            value={data.date_entry}
            required
          />
          <label>Data di entrata</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="region"
            onChange={handleChange}
            value={data.region}
            required
          />
          <label>Regione</label>
        </div>

        <div className="userBox">
          <input
            type="text"
            name="structure"
            onChange={handleChange}
            value={data.structure}
            required
          />
          <label>Struttura</label>
        </div>

        <div className="userBox">
          <input
            type="file"
            accept="image/*"
            name="img"
            multiple
            onChange={handleFileChange}
          />
           {spanImg ? <span>Immagine mancante</span> : null}
        </div>

        <div className="userBox">
          <input
            type="text"
            name="contacts"
            onChange={handleChange}
            value={data.contacts}
            required
          />
          <label>Contatti</label>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            <button type="submit" className="secondaryBtn formBtn">
              Inserisci
            </button>
          </>
        )}
      </form>
    </div>
  );
}
