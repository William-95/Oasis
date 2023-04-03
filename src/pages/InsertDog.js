import React from 'react'
import headerBg from "../img/03.jpg";
import "../css/header.css";
import FormInsertDog from '../components/FormInsertDog';

export default function InsertDog() {
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

          <FormInsertDog/>
    </div>
  )
}
