import React,{useContext,useEffect} from 'react'
import headerBg from "../img/03.jpg";
import DogCard from '../components/DogCard';
import Filter from '../components/Filter';
import { StateContext } from "../SetContext";

export default function List() {
  const {filterDog,dog,setFilterDog} = useContext(StateContext);
  
  useEffect(() => {
    const timer = setTimeout(() => {
     setFilterDog(dog);
    }, 1000);
    return () => clearTimeout(timer);
     // eslint-disable-next-line
  }, []);
  const newDog=[...filterDog];


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
