import React from 'react'
import Eliminar from '../Eliminar/Eliminar';
import estilos from './Tarea.module.css'

function Tarea({tarea, id, borrarTarea}) {
  return (
    <li className={estilos.li}>
      <div className={estilos.div1}><h4 className={estilos.h4}>{tarea.titulo}</h4></div>
      <div className={estilos.div2}><p className={estilos.p}>{tarea.descripcion}</p></div>
      <div className={estilos.div3}><Eliminar borrarTarea={borrarTarea} id={id} /></div>
    </li>
  )
}

export default Tarea;