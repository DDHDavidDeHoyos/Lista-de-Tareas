

import React from 'react';
import estilos from './Pagina.module.css';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';

function Pagina({guardado, borrarTarea}) {
    return (
        <div className={estilos.pantalla}>
            <Nav/>
            <Container borrarTarea={borrarTarea} guardado={guardado}/>
        </div>        
    );
}

export default Pagina;