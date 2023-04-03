import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/cardDog.css";

import defaultImg from'../img/defaultImg.jpg';

export default function DogCard({img,id,name}) {
  return (
    <article className="card">
      
        <img src={img||defaultImg} alt="" />
        <h4 className="cardTilte">{name}</h4>
        
        <Link to={`/singledog/${id}`} className="primaryBtn" >
          Altro
        </Link>
       
      
    </article>
  )
}

DogCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  };