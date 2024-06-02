import Vidas from "../vidas";
import React, { useState } from "react";

import puzzle2 from "../../img/puzzle2.png";

import {
  buttonStyle,
  cardContainerStyle,
  cardStyle,
  titleStyle,
  incorrectButtonStyle,
} from "../../styled";
import Puzzle from "../puzzle";

const Nivel2 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);

  const algorithmOptions = [
    "c, e, d, g, f, h, a, b, i",
    "c, f, e, d, b, h, a, g, i",
    "a, b, c, d, e, f, g, h, i",
    "c, f, e, d, a, b, h, g, i",
  ];

  const handleCardClick = (option) => {
    if (option === 3) {
      setMessage("LO HICISTE MUY BIEN");
      setVisiblePuzzle(true);
      setIsDisabledButton(false);
    } else {
      onFail();
      setIsOk(false);
    }
  };

  const renderAlgoritmo = () => {
    return algorithmOptions.map((option, index) => (
      <div
        key={index}
        style={{ ...cardStyle, backgroundColor: "#87CEEB" }}
        onClick={() => handleCardClick(index)}
      >
        <p style={{ color: "black", padding: "10px" }}>{option}</p>
      </div>
    ));
  };

  const resetIntento = () => {
    setIsOk(true);
    console.log("reset");
  };
  return (
    <>
      <header className="App-header">
        <Vidas cantidadVidas={cantidadVidas} />
        <div style={titleStyle}>El orden correcto del algoritmo es:</div>
        <div style={titleStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <span>a. Salir de casa</span>
            <span>b. Dirigirme a la escuela</span>
            <span>c. Levantarme</span>
            <span>d. Vestirme</span>
            <span>e. Asearme</span>
            <span>f. Desayunar</span>
            <span>g. Ponerme los zapatos</span>
            <span>h. Tomar los útiles</span>
            <span>i. Llegar a la escuela</span>
          </div>
        </div>
        <div style={cardContainerStyle}>{renderAlgoritmo()}</div>
        <div style={titleStyle}>{message}</div>
        {visiblePuzzle && <Puzzle src={puzzle2} />}
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
export default Nivel2;
