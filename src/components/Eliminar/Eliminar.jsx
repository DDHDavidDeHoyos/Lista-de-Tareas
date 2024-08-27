import React from 'react'
import estilos from './Eliminar.module.css'

function Eliminar({id, borrarTarea}) {

  return (
    <button className={estilos.btn} onClick={() => borrarTarea(id)} id={id} >Eliminar</button>
  )
}

export default Eliminar;