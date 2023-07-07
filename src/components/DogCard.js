import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/cardDog.css";
import defaultImg from "../img/defaultImg.jpg";
import { useTranslation } from "react-i18next";

export default function DogCard({ img, id, name }) {
  const { t } = useTranslation(["common"]);
  return (
    <article className="flip" key={id}>
      <div className="front">
        <img src={img || defaultImg} alt="" />
      </div>
      <div className="back">
        <h4 className="cardTilte">{name}</h4>

        <Link to={`/singledog/${id}`} className="primaryBtn1">
          {t("Altro")}
        </Link>
      </div>
    </article>
  );
}

DogCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.string,
};
