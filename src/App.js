import React, { useState, useEffect, useRef } from "react";
import logo from "./img/logo.png";
import play from "./img/play.png";
import sound from "./ongame_sound.mp3";
import "./App.css";
import Nivel1 from "./components/nivel1";
import Nivel2 from "./components/nivel2";
import Nivel3 from "./components/nivel3";
import Nivel4 from "./components/nivel4";

function App() {
  const [fase, setFase] = useState(1);
  const [audio] = useState(new Audio(sound));
  const iconInit = useRef(null);

  const [cantidadVidas, setCantidadVidas] = useState([1, 1, 1, 1]);

  const playSoundFunction = (event) => {
    audio.play();
    setTimeout(() => {
      audio.pause();
      setFase(2);
    }, 4000);
  };

  useEffect(() => {
    iconInit.current.addEventListener("click", playSoundFunction);
  }, []);

  const quitarVida = () => {
    setCantidadVidas(cantidadVidas.slice(0, cantidadVidas.length - 1));
  };

  useEffect(() => {
    if (cantidadVidas.length === 0) {
      setFase(2);
      setCantidadVidas([1, 1, 1, 1]);
    }
  }, [cantidadVidas]);
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
        <Nivel1
          onOk={() => setFase(4)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}

      {fase === 4 && (
        <Nivel2
          onOk={() => setFase(5)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}

      {fase === 5 && (
        <Nivel3
          onOk={() => setFase(6)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}

      {fase === 6 && (
        <Nivel4
          onOk={() => setFase(2)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}
    </div>
  );
}

export default App;
