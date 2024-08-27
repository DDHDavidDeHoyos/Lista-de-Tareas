

import React from 'react';
import estilos from './Container.module.css';
import Lista from '../Lista/Lista';

function Container({guardado, borrarTarea}) {
  return (
    <div className={estilos.container}>
        <Lista borrarTarea={borrarTarea} guardado={guardado}/>
    </div>
  )
}

export default Container