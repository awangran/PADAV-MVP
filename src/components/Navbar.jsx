import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/Recarga'>
            <i class="fa-solid fa-dollar-sign navicon"></i>
        </Link>

        <Link to='/Mapa'>
            <i class="fa-solid fa-location-dot navicon"></i>
        </Link>

        <Link to='/Tarjeta'>
            <i class="fa-regular fa-credit-card navicons"></i>
        </Link>
    </div>
  )
}

export default Navbar