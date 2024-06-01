import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import play from "./play.png";
import heart from "./heart.png";
import sound from "./ongame_sound.mp3";
import "./App.css";

import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";
import img4 from "./image4.png";
import img6 from "./imagen 6.png";
import img7 from "./imagen 7.png";
import img8 from "./imagen 8.png";
import img9 from "./imagen 9.png";
import img10 from "./imagen 10.png";
import img11 from "./imagen 11.png";
import img12 from "./image12.jpg";
import img13 from "./image13.jpg";
import img14 from "./image14.jpg";
import img15 from "./image15.jpg";
import puzzle1 from "./puzzle1.png";
import puzzle2 from "./puzzle2.png";
import puzzle3 from "./puzzle3.png";
import puzzle4 from "./puzzle4.png";
import check from "./check.png";
import equis from "./equis.png";

const containerStyle = {
  display: "grid",
  placeItems: "center",
  minHeight: "100vh",
  backgroundColor: "#000",
  gap: "20px",
};

const titleStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  color: "white",
};

const fondoStyle = {
  padding: "20px",
};

const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};

const cardStyle = {
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#000",
  cursor: "pointer",
};

const buttonStyle = {
  background: "linear-gradient(to bottom, green, #000)",
  color: "#ffffff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "20px",
};

const incorrectButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(to bottom, #FF0000, #800000)",
};

const algorithmOptions = [
  "c, e, d, g, f, h, a, b, i",
  "c, f, e, d, b, h, a, g, i",
  "a, b, c, d, e, f, g, h, i",
  "c, f, e, d, a, b, h, g, i",
];

const correctAnswer = "c, e, d, g, f, h, a, b, i";

function App() {
  const [fase, setFase] = useState(1);
  const [audio] = useState(new Audio(sound));
  const iconInit = useRef(null);
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("CONTINUAR");
  const [buttonStyleState, setButtonStyleState] = useState(buttonStyle);
  const [cantidadVidas, setCantidadVidas] = useState([1, 1, 1]);
  const [visiblePuzzle, setVisiblePuzzle] = useState(null);

  const playSoundFunction = (event) => {
    audio.play();
    setTimeout(() => {
      audio.pause();
      setFase(2);
    }, 10);
  };

  useEffect(() => {
    iconInit.current.addEventListener("click", playSoundFunction);
  }, []);

  const handleCardClick = (option) => {
    if (option === correctAnswer) {
      setMessage("LO HICISTE MUY BIEN");
      setButtonStyleState(buttonStyle);
      setButtonText("CONTINUAR");
      setVisiblePuzzle(puzzle1);
    } else {
      setMessage("TRANQUI, INTÉNTALO DE NUEVO");
      setButtonStyleState(incorrectButtonStyle);
      setButtonText("VOLVER A INTENTARLO");
      let newList = [...cantidadVidas];
      newList.pop();
      setCantidadVidas(newList);
    }
  };

  const handleImageClick = (imageIndex) => {
    if (fase === 4 && imageIndex === 11) {
      setMessage("LO HICISTE MUY BIEN");
      setButtonStyleState(buttonStyle);
      setButtonText("CONTINUAR");
      setVisiblePuzzle(puzzle2);
    } else if (fase === 5 && imageIndex === 5) {
      setMessage("LO HICISTE MUY BIEN");
      setButtonStyleState(buttonStyle);
      setButtonText("CONTINUAR");
      setVisiblePuzzle(puzzle3);
    } else if (fase === 6 && imageIndex === 0) {
      setMessage("LO HICISTE MUY BIEN");
      setButtonStyleState(buttonStyle);
      setButtonText("CONTINUAR");
      setVisiblePuzzle(puzzle4);
    } else {
      setMessage("TRANQUI, INTÉNTALO DE NUEVO");
      setButtonStyleState(incorrectButtonStyle);
      setButtonText("VOLVER A INTENTARLO");
      let newList = [...cantidadVidas];
      newList.pop();
      setCantidadVidas(newList);
    }
  };

  const renderPuzzle = () => {
    if (visiblePuzzle) {
      return <img src={visiblePuzzle} alt="Puzzle" width={300} height={300} />;
    }
    return null;
  };

  const renderCards = () => {
    return (
      <>
        <div style={cardStyle} onClick={() => handleCardClick(0)}>
          <img src={img1} alt={`Image 1`} width={300} height={300} />
        </div>
        <div style={cardStyle} onClick={() => handleCardClick(1)}>
          <img src={img2} alt={`Image 2`} width={300} height={300} />
        </div>
        <div style={cardStyle} onClick={() => handleCardClick(2)}>
          <img src={img3} alt={`Image 3`} width={300} height={300} />
        </div>
        <div style={cardStyle} onClick={() => handleCardClick(3)}>
          <img src={img4} alt={`Image 4`} width={300} height={300} />
        </div>
      </>
    );
  };

  const renderLanguajes = () => {
    return (
      <>
        <div style={cardStyle} onClick={() => handleImageClick(0)}>
          <img src={img6} alt={`Image 6`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(1)}>
          <img src={img7} alt={`Image 7`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(2)}>
          <img src={img8} alt={`Image 8`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(3)}>
          <img src={img9} alt={`Image 9`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(4)}>
          <img src={img10} alt={`Image 10`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(5)}>
          <img src={img11} alt={`Image 11`} width={200} height={200} />
        </div>
      </>
    );
  };

  const renderPadresIA = () => {
    return (
      <>
        <div style={cardStyle} onClick={() => handleImageClick(0)}>
          <img src={img12} alt={`Image 12`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(1)}>
          <img src={img13} alt={`Image 13`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(2)}>
          <img src={img14} alt={`Image 14`} width={200} height={200} />
        </div>
        <div style={cardStyle} onClick={() => handleImageClick(3)}>
          <img src={img15} alt={`Image 15`} width={200} height={200} />
        </div>
      </>
    );
  };

  const renderAlgoritmo = () => {
    return algorithmOptions.map((option, index) => (
      <div
        key={index}
        style={{ ...cardStyle, backgroundColor: "#87CEEB" }}
        onClick={() => handleCardClick(option)}
      >
        <p style={{ color: "black", padding: "10px" }}>{option}</p>
      </div>
    ));
  };

  return (
    <div className="App">
      {fase === 1 && (
        <>
          <header className="App-header">
            <div ref={iconInit}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </header>
        </>
      )}
      {fase === 2 && (
        <>
          <header className="App-header">
            <div
              style={{
                display: "flex",
                gap: "10px",
                width: "150px",
                paddingBottom: "40px",
              }}
            >
              <span>!Bienvenido/a a BITQUEST!</span>
            </div>
            <img src={logo} alt="logo" width={250} height={250} />
            <div style={{ paddingTop: "40px" }}>
              <div style={{ width: "320px", paddingBottom: "40px" }}>
                <span>
                  Responde preguntas sobre Introducción a la computación
                </span>
              </div>
              <div>
                <img src={play} onClick={() => setFase(3)} />
              </div>
            </div>
          </header>
        </>
      )}
      {fase === 3 && (
        <>
          <header className="App-header">
            <div style={{ display: "flex" }}>
              {cantidadVidas?.map((_, index) => (
                <img key={index} src={heart} alt={`Heart ${index + 1}`} />
              ))}
            </div>

            <div style={titleStyle}>¿Cuál de estos no es un computador?</div>
            <div style={cardContainerStyle}>{renderCards()}</div>
            <div style={titleStyle}>{message}</div>
            {renderPuzzle()}
            <button style={buttonStyleState} onClick={() => setFase(4)}>
              {buttonText}
            </button>
          </header>
        </>
      )}

      {fase === 4 && (
        <>
          <header className="App-header">
            <div style={{ display: "flex" }}>
              {cantidadVidas?.map((_, index) => (
                <img key={index} src={heart} alt={`Heart ${index + 1}`} />
              ))}
            </div>

            <div style={titleStyle}>El orden correcto del algoritmo es:</div>
            <div style={titleStyle}>
              <ul>
                <li>a. Salir de casa</li>
                <li>b. Dirigirme a la escuela</li>
                <li>c. Levantarme</li>
                <li>d. Vestirme</li>
                <li>e. Asearme</li>
                <li>f. Desayunar</li>
                <li>g. Ponerme los zapatos</li>
                <li>h. Tomar los útiles</li>
                <li>i. Llegar a la escuela</li>
              </ul>
            </div>
            <div style={cardContainerStyle}>{renderAlgoritmo()}</div>
            <div style={titleStyle}>{message}</div>
            {renderPuzzle()}
            <button style={buttonStyleState} onClick={() => setFase(5)}>
              {buttonText}
            </button>
          </header>
        </>
      )}

      {fase === 5 && (
        <>
          <header className="App-header">
            <div style={{ display: "flex" }}>
              {cantidadVidas?.map((_, index) => (
                <img key={index} src={heart} alt={`Heart ${index + 1}`} />
              ))}
            </div>

            <div style={titleStyle}>
              ¿Cuál de estos no es un lenguaje de programación?
            </div>
            <div style={cardContainerStyle}>{renderLanguajes()}</div>
            <div style={titleStyle}>{message}</div>
            {renderPuzzle()}
            <button
              style={buttonStyleState}
              onClick={() => setFase(buttonText === "CONTINUAR" ? 6 : 5)}
            >
              {buttonText}
            </button>
          </header>
        </>
      )}

      {fase === 6 && (
        <>
          <header className="App-header">
            <div style={{ display: "flex" }}>
              {cantidadVidas?.map((_, index) => (
                <img key={index} src={heart} alt={`Heart ${index + 1}`} />
              ))}
            </div>

            <div style={titleStyle}>
              ¿A quién se le considera el padre de la IA?
            </div>
            <div style={cardContainerStyle}>{renderPadresIA()}</div>
            <div style={titleStyle}>{message}</div>
            {renderPuzzle()}
            <button style={buttonStyleState} onClick={() => setFase(2)}>
              {buttonText}
            </button>
          </header>
        </>
      )}
    </div>
  );
}

export default App;
