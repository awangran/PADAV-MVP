import React from "react";
import { useState } from "react";
import Logout from "../components/Logout";

const Recarga = () => {
  const [numero, setNumero] = useState("0");
  const [tarjeta, setTarjeta] = useState("0");


  const recargaStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    backgroundColor: "#9CDFF9",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  };

  const recargaStyle2 = {
    height: "100vh",
    width: "100vw",
    display: "none",
    backgroundColor: "#9CDFF9",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    
  };

  const changeComp = () => {
    const search = document.getElementById("recarga1");
    const recarga = document.getElementById("recarga2");
  
    search.style.display = "none";
    recarga.style.display = "flex";

  }

  return (
    <>
      <Logout />
        
      <div id="recarga1" style={recargaStyle}>
         <h1>Recarga</h1>
         <button>Acerca tu tarjeta</button>
         <h3>o</h3>
         <h3>Ingresa el numero de tu tarjeta manualmente</h3>
         <input placeholder="# tarjeta" onChange={(e) => setTarjeta(e.target.value)}/>
        <button onClick={changeComp} style={{marginTop:'10px'}}>Buscar</button>
       </div> 

        <div id="recarga2" style={recargaStyle2}>

          <div>
          <h1>Tu saldo actual</h1>
          <p style={{color:'#060D15', fontWeight:'500'}}>Tarjeta #: {tarjeta}</p>
          <div className="saldo">
            <h2>$ {numero} COP</h2>
          </div>
          <p style={{color:'#060D15'}}><u>Ver historial</u></p>


          <h1>Recarga</h1>
          <p>Elige un medio de pago o guarda <br></br>uno nuevo</p>
            </div>

          <div className="buttons-pay">
            <button>
              <img className="svg" src='src/assets/nequi.svg'></img>
            </button>
            
            <button>
              <p>Nuevo método de pago +</p>
            </button>
          </div>
          
        </div>
      
      
      


      
    </>
  );
};

export default Recarga;
