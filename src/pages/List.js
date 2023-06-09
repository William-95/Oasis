import React, { useContext, useEffect } from "react";
import headerBg from "../img/03.jpg";
import DogCard from "../components/DogCard";
import Filter from "../components/Filter";
import { StateContext } from "../SetContext";
import Loading from "../components/Loading";

export default function List() {
  const { filterDog, dog, setFilterDog,loading,setLoading } = useContext(StateContext);

  /*Loading*/
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, []);
  /*End Loading*/
  
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterDog(dog);
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);



  const newDog = [...filterDog];

  return (
    <div>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`
        }}
      ></header>

      <Filter />

      <div className=" bg-gradient-to-r from-lime-700 to-yellow-500 m-8 rounded-lg">
       
       {loading?<Loading/>:
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
}

      </div>
    </div>
  );
}
