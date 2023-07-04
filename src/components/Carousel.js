import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../SetContext";
import "../css/carousel.css";
import { Link } from "react-router-dom";
import defaultImg from "../img/defaultImg.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Loading from "../components/Loading";

export default function Carousel() {
  const { dog, loading, setLoading } = useContext(StateContext);
  const [deg, setDeg] = useState(0);
  const newDog = dog.slice(0, 9);
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

  const handleLeft = () => {
    setDeg((deg) => deg + 45);
  };
  const handleRight = () => {
    setDeg((deg) => deg - 45);
  };

  if (loading === true) {
    return <Loading />;
  }
  return (
    <>
      <div className="carouselContainer">
        <div className="left" onClick={handleLeft}>
          <FaAngleLeft />
        </div>
        <div className="wrapper">
          <div
            className="carousel"
            style={{ transform: "rotateY(" + deg + "deg)" }}
          >
            {newDog.map((item) => {
              return (
                <article className="carouselCard" key={item.id}>
                  <img src={item.img || defaultImg} alt="" />

                  <h4 className="carouselTilte">{item.name}</h4>

                  <Link to={`/singledog/${item.id}`} className="primaryBtn2">
                    Altro
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        <div className="right" onClick={handleRight}>
          <FaAngleRight />
        </div>
      </div>
    </>
  );
}
