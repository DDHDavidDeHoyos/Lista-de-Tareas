

import { Routes, Route } from "react-router-dom";
import Pagina from "./components/Pagina/Pagina";
import NuevaTarea from "./components/NuevaTarea/NuevaTarea";
import React, {useState, useEffect} from "react";

function App() {

  const [guardado, setGuardado] = useState([]);

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareaGuardada');
      setGuardado(JSON.parse(tareasGuardadas))
  }, []);

  const borrarTarea = (idToDelete) => {
    const cargarTareas = guardado.filter((_, id) => id !== idToDelete);

    // Actualizar el estado y el localStorage
    setGuardado(cargarTareas);
    localStorage.setItem('tareaGuardada', JSON.stringify(cargarTareas));
    }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Pagina borrarTarea={borrarTarea} guardado={guardado}/>} />
        <Route path="/nuevaTarea" element={<NuevaTarea />} />
      </Routes>
    </div>
  );
}

export default App;
