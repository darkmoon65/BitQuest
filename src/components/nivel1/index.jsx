import React, { useState } from "react";
import "../../App.css";
import puzzle1 from "../../img/puzzle1.png";
import Vidas from "../vidas";
import img1 from "../../img/image1.png";
import img2 from "../../img/image2.png";
import img3 from "../../img/image3.png";
import img4 from "../../img/image4.png";

import {
  buttonStyle,
  cardContainerStyle,
  cardStyle,
  titleStyle,
  incorrectButtonStyle,
} from "../../styled";
import Puzzle from "../puzzle";

const Nivel1 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [isChecked, setIsChecked] = useState(0);
  const handleCardClick = (option) => {
    setIsChecked(option);
    if (option === 4) {
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

        <div style={titleStyle}>¿Cuál de estos no es un computador?</div>
        <div style={cardContainerStyle}>
          <div style={cardStyle} onClick={() => handleCardClick(1)}>
            <img
              src={img1}
              alt={`Image 1`}
              width={200}
              height={200}
              style={
                isChecked === 1
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleCardClick(2)}>
            <img
              src={img2}
              alt={`Image 2`}
              width={200}
              height={200}
              style={
                isChecked === 2
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleCardClick(3)}>
            <img
              src={img3}
              alt={`Image 3`}
              width={200}
              height={200}
              style={
                isChecked === 3
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleCardClick(4)}>
            <img
              src={img4}
              alt={`Image 4`}
              width={200}
              height={200}
              style={
                isChecked === 4
                  ? { backgroundColor: "green", padding: "10px" }
                  : {}
              }
            />
          </div>
        </div>
        <div style={titleStyle}>{message}</div>

        {visiblePuzzle && <Puzzle src={puzzle1} />}
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
export default Nivel1;
