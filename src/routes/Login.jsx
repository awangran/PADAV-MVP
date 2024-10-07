import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import Email from '../components/Email'
const Login = () => {
  const loginStyle = {
    height: '100vh',
    width:'100vw',                 
    display: 'flex',
    backgroundColor: "#060D15",
    overflowX: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    flexDirection:'column',
  }

  const loginMock = () => {
    const loginhome = document.getElementById('login-home');
    const email = document.getElementById('email');

    loginhome.style.display = 'none';
    email.style.display = 'flex';
    
  }
  
  return (
    <div className='bg' style={loginStyle}>
      <div id='login-home'>
      <div className='header' style={{color:'#F5F5F5'}}>
        <i class="fa-solid fa-train logo"></i>        
        <h1>¡Bienvenido!</h1>
        <h3 style={{color:'#9CDFF9'}}>Ingresa con alguna de las siguientes opciones</h3>
      </div>
      
      <div className='container'>
        <div className='login'>
          <button onClick={loginMock}>
            <i class="fa-regular fa-envelope icon"></i>
            Ingresa con un correo
          </button>
          <Link to='/recarga'>
          <p style={{color:'#9CDFF9'}} ><u>Continua sin una cuenta</u></p>
          </Link>
          
        </div>
      </div>
      </div>

      <div id='email' style={{display:'none'}}>
        <Email loginMock={loginMock}/>
      </div>


      
    </div>
  );
};

export default Login;