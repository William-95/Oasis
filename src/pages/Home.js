import React, { useContext } from "react";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/01.jpg";
export default function Home() {
  const { user } = useContext(StateContext);

  return (
    <div>
      <header className="headerBg" style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
        <h2>
          Welcome in your home page, {user.name || user[0].name}
        </h2>
      </header>
    </div>
  );
}
