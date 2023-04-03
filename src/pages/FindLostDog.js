import React from 'react'
import headerBg from "../img/03.jpg";
import "../css/header.css";
import FormFindDog from '../components/FormFindDog';

export default function FindLostDog() {
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

        <FormFindDog/>
    </div>
  )
}
