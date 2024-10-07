import React from 'react';
import { useState } from "react";

const [numero, setNumero] = useState('');


const Recarga = () => {
  const recargaStyle = {
    height: '100vh',
    width:'100vw',                 
    display: 'flex',
    backgroundColor: "#9CDFF9",
    overflowX: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    flexDirection:'column',

  }

  return (
    <div style={recargaStyle}>

      <h1>Recarga</h1>
      <button>Acerca tu tarjeta</button>
      <h3>o</h3>
      <h3>Ingresa el numero de tu tarjeta manualmente</h3>
      <input placeholder='# tarjeta'></input>
      <button>Buscar</button>
      
    </div>
  );
};

export default Recarga;