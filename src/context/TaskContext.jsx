// aqui llamo unos datos guardados en un array y los apodo "data" de manera que no halla conflicto con el nombre del estado
import {tasks as data} from '../data/tasks'
import {createContext, useState, useEffect} from 'react'

//creo y expoorto el contexto con el cual pasare las funciones a los archios correspondientes
export const TaskContext = createContext()

//creo y exporto la funcion
export function TaskContextProvider({children}) {
  
  //inicialiso el estado con array vacio
  const [tasks, setTasks] = useState([])
  
  //cuando se cargue la pagina el estado recibe los datos de 'tasks' apodados "data" 
  useEffect(() => {
    setTasks(data)
    //le pongo un array vacio al final para que nada mas se ejecute este useEffect cuando se cargue la paguina 
  }, [])
  
  //recibe la nueva tarea y la concatena en un estado con las anteriores tareas que hay en el estado
  function createTask (task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  //eleimina las tareas con el id ingresado
  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    //paso un un value con las cosa a enviar
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {children}
    </TaskContext.Provider>
  )
}
