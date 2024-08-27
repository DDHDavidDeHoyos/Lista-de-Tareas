import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import estilos from './NuevaTarea.module.css'

function NuevaTarea() {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const guardadoLocal = localStorage.getItem('tareaGuardada');
        if (guardadoLocal) {
          setTareas(JSON.parse(guardadoLocal));
        }
      }, []);

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const navigate = useNavigate();

    const changeTitulo = (event) => {
        setTitulo(event.target.value);
    }

    const changeDescripcion = (event) => {
        setDescripcion(event.target.value);
    }

    const cumplir = () => {
      if (titulo.trim() !== "" && descripcion.trim() !== "") {
        guardar();
      } else {
        alert("Por favor, ingrese una tarea y una descripción");
        setTitulo(titulo.trim());
        setDescripcion(descripcion.trim());
      }
    }

    const guardar = () => {
        const newTarea = {
            titulo: titulo,
            descripcion: descripcion
        }

        const nuevasTareas = [...tareas, newTarea]

        setTareas(nuevasTareas);

        localStorage.setItem('tareaGuardada', JSON.stringify(nuevasTareas));

        setTitulo("");
        setDescripcion("");

        navigate("/");

        window.location.reload();
    }

  return (
    <div className={estilos.cont}>
        <div className={estilos.form}>
          <h2 className={estilos.h2}>Nueva tarea</h2>
          <div className={estilos.escrito}>
            <label className={estilos.label}>Tarea:</label>
            <input className={estilos.input} value={titulo} onChange={changeTitulo} type="text" required maxLength="20" />
          </div>

            <div className={estilos.escrito}>
            <label className={estilos.label}>Descripción:</label>
            <textarea className={estilos.text} value={descripcion} onChange={changeDescripcion} type="text" required />
            </div>

            <button className={estilos.btn} onClick={cumplir} >Crear tarea</button>
            <button className={estilos.btn2} onClick={() => navigate("/")}>Cancelar</button>
        </div>
    </div>
  )
}
export default NuevaTarea;