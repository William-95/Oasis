import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/cardDog.css";
import defaultImg from "../img/defaultImg.jpg";

export default function DogCard({ img, id, name }) {
  return (
    <article className="flip" key={id}>
      <div className="front">
        <img src={"https://oasis-db-production.up.railway.app/" + img || defaultImg} alt="" />
      </div>

      <div className="back">
        <h4 className="cardTilte">{name}</h4>

        <Link to={`/singledog/${id}`} className="primaryBtn1">
          Altro
        </Link>
      </div>
    </article>
  );
}

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
