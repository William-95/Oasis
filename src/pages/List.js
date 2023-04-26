import React,{useContext} from 'react'
import headerBg from "../img/03.jpg";
import DogCard from '../components/DogCard';
import Filter from '../components/Filter';
import { StateContext } from "../SetContext";

export default function List() {
  const { dog} = useContext(StateContext);

  const newDog=[...dog];
  

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

          <Filter/>
          

        <div className="searchList">
          {newDog.map((item) => {
            return (
              <DogCard
                name={item.name}
                key={item.id}
                id={item.id}
                img={item.img}
              />
            );
          })}
        </div>


    </div>
  )
}
