import logo from './logo.png';
import play from './play.png';
import menu from './menu.png';
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
import heart from './heart.png';

import {useState, useEffect, useRef } from 'react';
import './App.css';
import sound from './ongame_sound.mp3'

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

const images = ["./image1.png", "image2.png", "image3.png", "image4.png"];

function App() {
  const [fase, setFase] = useState(1);
  const [audio] = useState(new Audio(sound));
  const iconInit = useRef(null);
  const [message, setMessage] = useState("LO HICISTE MUY BIEN");
  const [buttonColor, setButtonColor] = useState(buttonStyle.background);
  const [cantidadVidas, setCantidadVidas] = useState([1,1,1]);

  const playSoundFunction = (event) => {
      console.log("aa")
      audio.play()
      setTimeout(()=> {
        audio.pause();
        setFase(2);
      }, 4000)  
  }

  useEffect (()=> {
    console.log(iconInit.current)

    iconInit.current.addEventListener("click", playSoundFunction)
  }, [])


  
  const handleButtonClick = () => {
    setMessage("Tranqui, vuelve a intentarlo");
    setButtonColor("linear-gradient(to bottom,  #FF0000, #800000)");
    let newList = [...cantidadVidas];
    newList.pop()
    setCantidadVidas(newList);
  };

  const renderCards = () => {
    return (
      <>
        <div style={cardStyle}>
          <img src={img1} alt={`Image `} width={300} height={300} />
        </div>
        <div  style={cardStyle}>
          <img src={img2} alt={`Image `} width={300} height={300} />
        </div>
        <div  style={cardStyle}>
          <img src={img3} alt={`Image `} width={300} height={300} />
        </div>
        <div  style={cardStyle}>
          <img src={img4} alt={`Image `} width={300} height={300} />
        </div>
      </>
    )
  };
  return (
    <div className="App">
      {
        fase === 1 &&  (
          <>
            <header className="App-header">
              <div ref={iconInit}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </header>
          </>
        ) 

      }
      {
        fase === 2 && (
          <>
            <header className="App-header">
              {/* <div style={{display: 'flex' , alignItems: 'start', justifyContent: 'start', width: '30%', paddingBottom: '40px'}}>
                <img src={menu} width={20} height={20} />
              </div>  */}
              <div style={{display: 'flex', gap: '10px', width: '150px', paddingBottom: '40px'}}>
                <span>!Bienvenido/a a BITQUEST!</span>
              </div>
              <img src={logo} alt="logo" width={250} height={250}/>    
              <div style={{ paddingTop: '40px'}}>
                <div style={{width: '320px', paddingBottom: '40px'}}>
                  <span>Responde preguntas sobre Introduccion a la computación</span>
                </div>
                <div>
                  <img src={play} onClick={()=> setFase(3)}/>
                </div>
              </div>
            </header>
          </>
        ) 
      }
      {
        fase === 3 && 
        (
          <>
          <header className="App-header">
            <div style={{display: 'flex'}}> 
              {
                cantidadVidas?.map(() => {
                  return ( <img src={heart} />)
                })
              }
            </div>


           <div style={titleStyle}>¿Cuál de estos no es un computador?</div>
             <div style={cardContainerStyle}>{renderCards()}</div>
             <div style={titleStyle}>{message}</div>
   
             <button
               style={{ ...buttonStyle, background: buttonColor }}
               onClick={handleButtonClick}
             >
               CONTINUAR
             </button>
          </header>
   
         </>
        )
      } 
    </div>
  );
}

export default App;
