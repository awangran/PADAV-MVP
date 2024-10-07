import './App.css'
import { Routes, Route } from 'react-router-dom'
import Admin from './routes/Admin'
import Login from './routes/Login'
import Mapa from './routes/Mapa'
import Recarga from './routes/Recarga'
import Tarjeta from './routes/Tarjeta'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Admin' element={<Admin />} />
      <Route path='/Mapa' element={<Mapa />} />
      <Route path='/Recarga' element={<Recarga />} />
      <Route path='/Tarjeta' element={<Tarjeta />} />
    </Routes>
  )
}
