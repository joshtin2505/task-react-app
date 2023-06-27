import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //al useContext le paso que contexto debe usar y que cosa guardada en este contexto quiero usar la cual es la funcion crear tarea
  const {createTask} = useContext(TaskContext)

  //cuando se hace click en el boton guardar, elimo el comportamiento por defeco y muestro el titulo escrito en el input
  const handleSubmit = (e) => {
    e.preventDefault();

    //le paso un objeto como parametro al la funcion crear tarea
    createTask({
      title,
      description,
    });
    //y luego de enviarce toda la informacion a guardar par mostrar en la lista de taeas por medio de "createTask()" procedo a cambiar el estado para darle el valor de el actua estado a los inputs y haci poder blanquearlos
    setTitle("");
    setDescription("");
  };
  return (
    <>
      {/* aqui retorno un input y lo envio en cada cambio a guardar en un estado */}
      <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md ">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tareas</h1>
        <input
          type="text"
          name=""
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 outline-none"
        />

        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 outline-none"
        />

        <button className="bg-indigo-500 px-3 py-1 rounded-md">Guardar</button>
      </form>
      </div>
    </>
  );
}

export default Taskform;
