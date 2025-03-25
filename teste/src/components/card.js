import React from "react";

const Carta = ({ feriado }) => {
  return (
    <div>
      <h2>{feriado.name}</h2>
      <p>Data: {feriado.date}</p>
      <p>Tipo: {feriado.type}</p>
    </div>
  );
};

export default Carta;
