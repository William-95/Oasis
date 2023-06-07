import React, { useContext,useState } from "react";
import { StateContext } from "../SetContext";
import "../css/carousel.css";
import { Link } from "react-router-dom";
import defaultImg from "../img/defaultImg.jpg";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";

export default function Carousel() {
  const { dog } = useContext(StateContext);
  const[deg,setDeg]=useState(0)
  const newDog = dog.slice(0, 9);

  

  const handleLeft=()=>{
   
    setDeg(deg=>deg+45);
  }
  const handleRight=()=>{
    setDeg(deg=>deg-45);
  }
  return (
    <>
    
    <div className="carouselContainer">
        <div className="left"onClick={handleLeft}><FaAngleLeft/></div>
      <div className="wrapper">
        <div className="carousel" style={{transform:"rotateY("+deg+"deg)"}}>
          {newDog.map((item) => {
            return (
              <article className="carouselCard">
                <img
                  src={"http://127.0.0.1:8000/" + item.img || defaultImg}
                  alt=""
                />
                <h4 className="carouselTilte">{item.name}</h4>

                <Link to={`/singledog/${item.id}`} className="primaryBtn2">
                  Altro
                </Link>
              </article>
            );
            
          })}
        </div>
      </div>

      

      <div className="right"onClick={handleRight}><FaAngleRight/></div>
    </div>
    </>
  );
}
