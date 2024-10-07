import React, { useState } from 'react'

function Nequi({setisOpen, setNumero, numero}) {
    const [saldo, setSaldo] = useState('')
    const nuevo = Number(numero) + Number(saldo);
    return (
    <div className='nequiModal'>
    <i class="fa-solid fa-xmark close" onClick={() => setisOpen(false)}></i>
        
            <h2>Recarga tu tarjeta</h2>
            <label>Monto</label>
            
            <input type='number' style={{width:'50%'}} onChange={(e) => setSaldo(e.target.value)}></input>
            <button style={{width:'50%'}} onClick={(e) => setNumero(nuevo)}>Recarga</button>
        
    </div>
  )
}

export default Nequi
