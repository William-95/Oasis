import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../SetContext";
import "../css/filter.css";

export default function Filter() {
  const { dog, setFilterDog } = useContext(StateContext);
  const [sex, setSex] = useState("");
  const [race, setRace] = useState("");
  const [size, setSize] = useState("");
  const [structure, setStructure] = useState("");

  var newDog =[...dog];



  const filteredArray = () => {
    const filteredData = newDog.filter((item) => {
      return (
        item.sex.includes(sex) &&
        item.race.includes(race) &&
        item.size.includes(size) &&
        item.structure.includes(structure)
      );
    });

    setFilterDog(filteredData);
  };

  useEffect(() => {
    filteredArray();
    // eslint-disable-next-line
  }, [sex, race, sex, structure]);

  return (
    <div className="containerFilter borderSpacing">
      <div className="optionSelect">
        <h5>Sesso</h5>
        <select onChange={(e) => setSex(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Razza</h5>
        <select onChange={(e) => setRace(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Beagle">Beagle</option>
          <option value="Labrador">Labrador</option>
          <option value="Pitbul">Pitbul</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Dimensione</h5>
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Piccola">Piccola</option>
          <option value="Media">Media</option>
          <option value="Grande">Grande</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Struttura</h5>
        <select onChange={(e) => setStructure(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Casa pamela">casa pamela</option>
          <option value="Roma">roma</option>
        </select>
      </div>
    </div>
  );
}
