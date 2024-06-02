import React, { useState } from "react";
import Vidas from "../vidas";

import img6 from "../../img/imagen 6.png";
import img7 from "../../img/imagen 7.png";
import img8 from "../../img/imagen 8.png";
import img9 from "../../img/imagen 9.png";
import img10 from "../../img/imagen 10.png";
import img11 from "../../img/imagen 11.png";

import {
  buttonStyle,
  cardContainerStyle,
  cardStyle,
  titleStyle,
  incorrectButtonStyle,
} from "../../styled";

import puzzle3 from "../../img/puzzle3.png";
import Puzzle from "../puzzle";

const Nivel3 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [isChecked, setIsChecked] = useState(-1);

  const handleImageClick = (imageIndex) => {
    setIsChecked(imageIndex);
    if (imageIndex === 5) {
      setMessage("LO HICISTE MUY BIEN");
      setVisiblePuzzle(true);
      setIsDisabledButton(false);
    } else {
      onFail();
      setIsOk(false);
    }
  };

  const resetIntento = () => {
    setIsOk(true);
    console.log("reset");
  };

  return (
    <>
      <header className="App-header">
        <Vidas cantidadVidas={cantidadVidas} />
        <div style={titleStyle}>
          ¿Cuál de estos no es un lenguaje de programación?
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gap: "10px",
          }}
        >
          <div style={cardStyle} onClick={() => handleImageClick(0)}>
            <img
              src={img6}
              alt={`Image 6`}
              width={200}
              height={200}
              style={
                isChecked === 0
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(1)}>
            <img
              src={img7}
              alt={`Image 7`}
              width={200}
              height={200}
              style={
                isChecked === 1
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(2)}>
            <img
              src={img8}
              alt={`Image 8`}
              width={200}
              height={200}
              style={
                isChecked === 2
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(3)}>
            <img
              src={img9}
              alt={`Image 9`}
              width={200}
              height={200}
              style={
                isChecked === 3
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(4)}>
            <img
              src={img10}
              alt={`Image 10`}
              width={200}
              height={200}
              style={
                isChecked === 4
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(5)}>
            <img
              src={img11}
              alt={`Image 11`}
              width={200}
              height={200}
              style={
                isChecked === 5
                  ? { backgroundColor: "green", padding: "10px" }
                  : {}
              }
            />
          </div>
        </div>
        <div style={titleStyle}>{message}</div>
        {visiblePuzzle && <Puzzle src={puzzle3} />}
        {isOk ? (
          <button
            style={buttonStyle}
            onClick={onOk}
            disabled={isDisabledButton}
          >
            CONTINUAR
          </button>
        ) : (
          <button style={incorrectButtonStyle} onClick={resetIntento}>
            VOLVER A INTENTARLO
          </button>
        )}
      </header>
    </>
  );
};
export default Nivel3;
