import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../SetContext";
import "../css/filter.css";

export default function Filter() {
  const { dog, setFilterDog} = useContext(StateContext);
  const [sex, setSex] = useState({});
  const [race, setRace] = useState({});
  const [size, setSize] = useState({});
  const [structure, setStructure] = useState({});


  const newDog = [...dog];
  
  useEffect(() => {
  const filterSex = newDog.filter((item) => {
      if (sex ==="tutti") {
        return newDog;
      } else {
      return item.sex === sex                
      }
    });
    setFilterDog(filterSex);    
    // eslint-disable-next-line
  }, [sex]);

  useEffect(() => {
    const filterRace = newDog.filter((item) => {
       if(race ==="tutti") {
          return newDog;
        }else{
        return item.race === race;
        };    
      });
      setFilterDog(filterRace);      
      // eslint-disable-next-line
    }, [race]);

    useEffect(() => {
      const filterSize = newDog.filter((item) => {
         if(size ==="tutti") {
            return newDog;
          }else{
          return item.size === size;
          };    
        });
        setFilterDog(filterSize);      
        // eslint-disable-next-line
      }, [size]);


      useEffect(() => {
        const filterStructure = newDog.filter((item) => {
           if(structure ==="tutti") {
              return newDog;
            }else{
            return item.structure === structure;
            };    
          });
          setFilterDog(filterStructure);      
          // eslint-disable-next-line
        }, [structure]);
  
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
          <option value="tutti">Tutti</option>
          <option value="beagle">Beagle</option>
          <option value="labrador">Labrador</option>
          <option value="pitbul">Pitbul</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Dimensione</h5>
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="tutti">Tutti</option>
          <option value="piccola">Piccola</option>
          <option value="media">Media</option>
          <option value="grande">Grande</option>
        </select>
      </div>

      <div className="optionSelect">
        <h5>Struttura</h5>
        <select onChange={(e) => setStructure(e.target.value)}>
          <option value="tutti">Tutti</option>
          <option value="casa pamela">casa pamela</option>
          <option value="roma">roma</option>
        </select>
      </div>
    </div>
  );
}
