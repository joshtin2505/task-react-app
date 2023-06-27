import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import TaskCard from './TaskCard'
function TaskList() {
    const {tasks} = useContext(TaskContext)
    //esta condicion es para dar un return cuando no hay tareas
    if(tasks.length === 0) {
        return (
            <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
        )
    }
  //este retun se ejecuta si hay alguna tarea
  return (
    <div className='grid grid-cols-4 gap-2'>
        {
            //este map recorre el array de tarea, mostrando sus datos
            tasks.map((task)=>(
                <TaskCard task={task} key={task.id}/>
            ))
        }
    </div>
  )
}

export default TaskList