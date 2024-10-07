import React from 'react';
import Logout from '../components/Logout';
import Navbar from '../components/Navbar';

const Tarjeta = () => {
  const style = {
    height:'100vh',
    width: "100vw",
    display: "flex",
    backgroundColor: "#9CDFF9",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    flexDirection: "column",
    gap:'20px'
  }

  return (
    <>
    <Logout/>
    <div style={style}>
      <h1 style={{color:'#060D15'}}>Tu tarjeta virtual</h1>
      <div className='tarjetaContainer'>
      <i className="signal fa-solid fa-wifi"></i>
        <h2>Tarjeta PADAV</h2>
        <h2>1234 5678 9012 4738</h2>
        <p>Carlos Andrés Lozano</p>
        <div className='row'>      <i class="qr fa-solid fa-qrcode"></i>
</div>
      </div>
      
      <div className='container'>
        <button style={{
          color:'#F5F5F5',
          fontWeight:'600',
          backgroundColor:'#060D15'
        }}>Desactivar tarjeta</button>
        <button style={{
          color:'#F5F5F5',
          fontWeight:'600',
          backgroundColor:'#3EA4DC'
        }}>Reembolsar saldo</button>
        <p><a style={{color:'#3EA4DC', textDecoration:'underline'}}>Ordenar nueva tarjeta</a></p>
      </div>
      
      

    </div>

    <Navbar/>
    </>
  );
};

export default Tarjeta;