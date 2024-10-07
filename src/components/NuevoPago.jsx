import React, { useState } from 'react'

function NuevoPago({setisOpen, setisOpenPago, setpagosList, pagosList}) {
    const [cuenta, setCuenta] = useState('Bancolombia')

    const Boton = () => {
        return(
        <button onClick={() => setisOpen(true)}>
            <h3>{cuenta}</h3>
        </button>
      )
    }

    const handleAdd = event => {
        setpagosList(pagosList.concat(<Boton key={pagosList.length} style={{height:'30px'}} onClick />));
    };

  return (
    <div className='nequiModal'>
    <i class="fa-solid fa-xmark close" onClick={() => setisOpenPago(false)}></i>
        
            <h2>Ingresa un nuevo método de pago</h2>
            <label></label>
            <select>
                <option value='bancolombia'>Bancolombia</option>
                <option value='davivienda'>Davivienda</option>
            </select>

            <label>
                Número de Cuenta
            </label>

            <input></input>

            <label>Clave dinámica</label>
            <input type='password'></input>

            

            <button style={{width:'50%'}} onClick={handleAdd}>Añadir</button>
        
    </div>
  )
}

export default NuevoPago