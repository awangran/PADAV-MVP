import React from "react";
import { Link } from 'react-router-dom'


const Email = () => {
  const loginMock2 = () => {
    const loginhome = document.getElementById('login-home');
    const email = document.getElementById('email');

    loginhome.style.display = 'flex';
    loginhome.style.flexDirection = 'column';

    email.style.display = 'none';

  }
  
  return (
    <div>
      
      <i class="fa-solid fa-arrow-right-from-bracket" onClick={loginMock2}></i>
      <h2>Email</h2>
    </div>
  );
};

export default Email;
