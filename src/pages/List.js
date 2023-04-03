import React,{useContext} from 'react'
import headerBg from "../img/03.jpg";
import "../css/header.css";
import "../css/cardDog.css";

import DogCard from '../components/DogCard';
import { StateContext } from "../SetContext";

export default function List() {
  const { dog } = useContext(StateContext);

  return (
    <div>
      <header
          className="headerBg"
          style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
        </header>

        <div className="searchList">
          {dog.map((item) => {
            return (
              <DogCard
                name={item.name}
                key={item.id}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>


    </div>
  )
}
