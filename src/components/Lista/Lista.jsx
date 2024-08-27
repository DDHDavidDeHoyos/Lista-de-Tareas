import React from 'react'
import Tarea from '../Tarea/Tarea';
import estilos from './Lista.module.css'

function Lista({guardado, borrarTarea}) {
  return (
    <div className={estilos.cont}>
      <div className={estilos.titulos}>
        <h3 className={estilos.pri}>Título</h3>
        <h3 className={estilos.seg}>Descripción</h3>
      </div>
            <ul className={estilos.ul}>
                {guardado.map((tarea, index) => {
                    return <Tarea borrarTarea={borrarTarea} key={index} id={index} tarea={tarea} />
                })}
            </ul>
    </div>
  )
}

export default Lista;