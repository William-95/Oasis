import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../SetContext";
import "../css/filter.css";

export default function Filter() {
  const { dog, setFilterDog, filterDog } = useContext(StateContext);
  const [sex, setSex] = useState({});
  const [race, setRace] = useState({});
  const [size, setSize] = useState({});
  const [structure, setStructure] = useState({});
console.log(sex);

  const newDog = [...dog];

  useEffect(() => {

    const cicci = newDog.filter((item) => {
      
      if (sex ==="tutti") {
        return newDog;
      }else{
      return item.sex === sex;
      }
      // if(sex ==="tutti") {
      //   return newDog;
      // }else{
      // return item.race === race;
      // };
      
    });
    setFilterDog(cicci);
    console.log(filterDog);
    // eslint-disable-next-line
  }, [sex]);
  
  return (
    <div className="containerFilter">
      <div className="optionSelect">
        <h5>Sesso</h5>
        <select onChange={(e) => setSex(e.target.value)}>
          <option value="tutti">Tutti</option>
          <option value="maschio">Maschio</option>
          <option value="femmina">Femmina</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Razza</h5>
        <select onChange={(e) => setRace(e.target.value)}>
          <option value="">Tutti</option>
          <option value="maschio">Maschio</option>
          <option value="femmina">Femmina</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Dimensione</h5>
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="">Tutti</option>
          <option value="maschio">Piccola</option>
          <option value="femmina">Media</option>
          <option value="femmina">Grande</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Struttura</h5>
        <select onChange={(e) => setStructure(e.target.value)}>
          <option value="">Tutti</option>
          <option value="maschio">Maschio</option>
          <option value="femmina">Femmina</option>
        </select>
      </div>
    </div>
  );
}
