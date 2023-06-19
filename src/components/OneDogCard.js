import React, { useContext, useEffect } from "react";
import defaultImg from "../img/defaultImg.jpg";
import "../css/oneDogCard.css";
import { StateContext } from "../SetContext";
import Loading from "../components/Loading";

export default function OneDogCard({
  name,
  race,
  sex,
  size,
  img,
  microchip,
  region,
  structure,
  contacts,
  date_birth,
  date_entry,
}) {
  const { loading, setLoading } = useContext(StateContext);

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

  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="containerDog">
      <h3>Ciao, io sono {name}</h3>
      <div className="containerGroup">
        <img src={ img || defaultImg} alt="" />
        <div className="description">
          <table cellSpacing={10}>
            <tbody>
              <tr>
                <th>
                  <h5>Nome:</h5>
                </th>
                <td>
                  <p>{name}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Sesso:</h5>
                </th>
                <td>
                  <p>{sex}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Razza:</h5>
                </th>
                <td>
                  <p>{race}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Stazza:</h5>
                </th>
                <td>
                  <p>{size}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Data di nascita:</h5>
                </th>
                <td>
                  <p>{date_birth}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Microchip:</h5>
                </th>
                <td>
                  <p>{microchip}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Regione:</h5>
                </th>
                <td>
                  <p>{region}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Struttura:</h5>
                </th>
                <td>
                  <p>{structure}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Entrato/a:</h5>
                </th>
                <td>
                  <p>{date_entry}</p>
                </td>
              </tr>

              <tr>
                <th>
                  <h5>Contatti:</h5>
                </th>
                <td>
                  <p>{contacts}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
