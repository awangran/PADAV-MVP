import React from "react";
import { useState } from "react";
import Logout from "../components/Logout";
import Nequi from "../components/Nequi";
import NuevoPago from "../components/NuevoPago";
import Navbar from "../components/Navbar";

const Recarga = () => {
  const [numero, setNumero] = useState("0");
  const [tarjeta, setTarjeta] = useState("0");

  const [isOpen, setisOpen] = useState(false);
  const [isOpenPago, setisOpenPago] = useState(false);

  const [pagosList, setpagosList] = useState([]);



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
         <button style={{
        backgroundColor:'#060D15',
        width:'200px',
        color:'#F5F5F5'
         }}>Acerca tu tarjeta</button>
         <p style={{color:'#060D15'}}>o</p>
         <p style={{color:'#060D15'}}>Ingresa el numero de tu tarjeta <br></br> manualmente</p>
         <input placeholder="# tarjeta" onChange={(e) => setTarjeta(e.target.value)}/>
        <button onClick={changeComp} style=              {{backgroundColor:'#3EA4DC',                             color:'white', marginTop:'20px'
                                                          }}>Buscar</button>
        <Navbar />                                           

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
            <button onClick={() => setisOpen(true)}>
              <img className="svg" src='src/assets/nequi.svg'></img>
            </button>

            {pagosList}
            
            <button onClick={() => setisOpenPago(true)}>
              <p>Nuevo método de pago +</p>
            </button>
          </div>
          {isOpen && <Nequi numero={numero} setisOpen={setisOpen} setNumero={setNumero} /> }
          {isOpenPago && <NuevoPago setisOpen={setisOpen} setisOpenPago={setisOpenPago} pagosList={pagosList} setpagosList={setpagosList} />}
          
           <Navbar />                                           
        </div>
      


      
    </>
  );
};

export default Recarga;
