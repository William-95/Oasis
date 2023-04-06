import React from 'react'
import headerBg from "../img/03.jpg";

export default function SingleDog() {
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

    </div>
  )
}
