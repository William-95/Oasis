import React, { useContext, useState } from "react";
import { StateContext } from "../SetContext";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import "../css/enterForm.css";
import UpdateDogApi from "../api/UpdateDogApi";

export default function UpdateDog() {
  const { send, setSend } = useContext(StateContext);
  const { id_dog } = useParams();
  const [btn, setBtn] = useState({ isOpen: false });
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
    region:"",
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
    setSend(!send);

    setTimeout(() => {
      setSend(!send);
    }, 300);
  };
  const handleToggle = () => {
    setBtn({ isOpen: !btn.isOpen });
  };

  return (
    <div>
      <div className="updateBtn">
        <button onClick={handleToggle}>Modifica cane</button>
      </div>

      <div
        className={classNames("formBox no-showForm", { showForm: btn.isOpen })}
      >
        <h3>Modifica cane</h3>
        <form onSubmit={handleSubmit}>
          {send ? <UpdateDogApi id_dog={id_dog} dati={data} /> : null}

          <div className="userBox">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
            <label>Nome</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="sex"
              onChange={handleChange}
              value={data.sex}
            />
            <label>Sesso</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="race"
              onChange={handleChange}
              value={data.race}
            />
            <label>Razza</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="size"
              onChange={handleChange}
              value={data.size}
            />
            <label>Stazza</label>
          </div>

          <div className="userBox dateBox">
            <input
              type="date"
              name="date_birth"
              onChange={handleChange}
              value={data.date_birth}
            />
            <label>Data di nascita</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="microchip"
              onChange={handleChange}
              value={data.microchip}
            />
            <label>Microchip</label>
          </div>

          <div className="userBox dateBox">
            <input
              type="date"
              name="date_entry"
              onChange={handleChange}
              value={data.date_entry}
            />
            <label>Data di entrata</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="region"
              onChange={handleChange}
              value={data.region}
            />
            <label>Regione</label>
          </div>

          <div className="userBox">
            <input
              type="text"
              name="structure"
              onChange={handleChange}
              value={data.structure}
            />
            <label>Struttura</label>
          </div>

          <div className="userBox">
            <input
              type="file"
              name="img"
              multiple
              onChange={handleFileChange}
            />
            {/* <label>Immagine</label> */}
          </div>

          <div className="userBox">
            <input
              type="text"
              name="contacts"
              onChange={handleChange}
              value={data.contacts}
            />
            <label>Contatti</label>
          </div>

          <button type="submit" className="secondaryBtn formBtn">
            Modifica
          </button>
        </form>
      </div>
    </div>
  );
}
