import React, { useState } from "react";
import Vidas from "../vidas";

import {
  buttonStyle,
  cardContainerStyle,
  cardStyle,
  titleStyle,
  incorrectButtonStyle,
} from "../../styled";

import img12 from "../../img/image12.jpg";
import img13 from "../../img/image13.jpg";
import img14 from "../../img/image14.jpg";
import img15 from "../../img/image15.jpg";

import puzzle4 from "../../img/puzzle4.png";
import Puzzle from "../puzzle";

const Nivel4 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [isChecked, setIsChecked] = useState(-1);

  const handleImageClick = (imageIndex) => {
    setIsChecked(imageIndex);
    if (imageIndex === 0) {
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
          ¿A quién se le considera el padre de la IA?
        </div>
        <div style={cardContainerStyle}>
          <div style={cardStyle} onClick={() => handleImageClick(0)}>
            <img
              src={img12}
              alt={`Image 12`}
              width={200}
              height={200}
              style={
                isChecked === 0
                  ? { backgroundColor: "green", padding: "10px" }
                  : {}
              }
            />
          </div>
          <div style={cardStyle} onClick={() => handleImageClick(1)}>
            <img
              src={img13}
              alt={`Image 13`}
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
              src={img14}
              alt={`Image 14`}
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
              src={img15}
              alt={`Image 15`}
              width={200}
              height={200}
              style={
                isChecked === 3
                  ? { backgroundColor: "red", padding: "10px" }
                  : {}
              }
            />
          </div>
        </div>
        <div style={titleStyle}>{message}</div>
        {visiblePuzzle && <Puzzle src={puzzle4} />}
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
export default Nivel4;
