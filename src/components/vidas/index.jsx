import React from "react";

import heart from "../../img/heart.png";

const Vidas = ({ cantidadVidas }) => {
  return (
    <div style={{ display: "flex" }}>
      {cantidadVidas?.map((_, index) => (
        <img key={index} src={heart} alt={`Heart ${index + 1}`} />
      ))}
    </div>
  );
};
export default Vidas;
