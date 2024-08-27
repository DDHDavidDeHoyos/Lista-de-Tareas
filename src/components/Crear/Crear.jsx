import React from 'react'
import { NavLink } from 'react-router-dom';
import estilos from './Crear.module.css'

function Crear() {
  return (
    <div className={estilos.cont}>
        <NavLink className={estilos.nav} to='/nuevaTarea'>
        <button className={estilos.btn}>Nueva tarea</button>
        <button className={estilos.btn1}>Nuevo</button>
        </NavLink>
    </div>
  )
}

export default Crear;