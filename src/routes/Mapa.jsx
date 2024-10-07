import React from 'react';
import Logout from '../components/Logout';
import Navbar from '../components/Navbar';

const Mapa = () => {
  const mapaStyle = {
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
  return (
    <>
    <Logout />

    
    <div style={mapaStyle}>
      <h1>Puntos de Recarga</h1>
      <div className='mapContainer'>
        <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d254512.90858604206!2d-74.25596062757022!3d4.636106622230475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sestaciones%20transmilenio!5e0!3m2!1ses!2sco!4v1728321742611!5m2!1ses!2sco" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h2>Estación más cercana: Calle 2</h2>
        <p><a target="_blank" style={{textDecoration:'underline', color:'#95acd0'}} href='https://maps.app.goo.gl/qokY51BCNdMNcVss6'>Ver en Google Maps</a></p>     
      </div>
      
    </div>

    <Navbar/>

    </>
  );
};

export default Mapa;