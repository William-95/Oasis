import React, { useState, useContext } from "react";
import { StateContext } from "../SetContext";

export default function FormInsertDog() {
  const { api } = useContext(StateContext);
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
    structure: "",
    contacts: "",
  });

  const handleFileChange = (event) => {
    setData((data) => ({ ...data, img: event.target.files[0] }));
  };
  console.log(data);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api({
      method: "post",
      url: `/dogs`,
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    })
      .then((result) => {
        if (result.status === 200) {
          console.log("Canne Inserito Correttamente.");
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <h3>Inserisci un cane</h3>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Nome:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Sesso:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="sex"
                  onChange={handleChange}
                  value={data.sex}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Razza:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="race"
                  onChange={handleChange}
                  value={data.race}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Stazza:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="size"
                  onChange={handleChange}
                  value={data.size}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Data di nascita:</label>
              </th>
              <td>
                <input
                  type="date"
                  name="date_birth"
                  onChange={handleChange}
                  value={data.date_birth}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Microchip:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="microchip"
                  onChange={handleChange}
                  value={data.microchip}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Data di entrata:</label>
              </th>
              <td>
                <input
                  type="date"
                  name="date_entry"
                  onChange={handleChange}
                  value={data.date_entry}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Struttura:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="structure"
                  onChange={handleChange}
                  value={data.structure}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Immagine:</label>
              </th>
              <td>
                <input
                  type="file"
                  name="img"
                  multiple
                  onChange={handleFileChange}
                  // value={data.img}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Contatti:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="contacts"
                  onChange={handleChange}
                  value={data.contacts}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="right">
                <button className="secondaryBtn">Inserisci</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
