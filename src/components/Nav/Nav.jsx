

import React from 'react'
import Crear from '../Crear/Crear';
import estilos from './Nav.module.css'

function Nav() {
  return (
    <div className={estilos.fondo}>
        <h1 className={estilos.title}>Lista de Tareas</h1>
        <Crear/>
    </div>
  )
}

export default Nav;