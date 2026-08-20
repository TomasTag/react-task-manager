import type { Task } from '../types/task'
import './TaskCard.css'

function TaskCard({ task }: { task: Task }){ //task: Task te dice de que tipo tiene que ser la variable que
    return (                                 //cargamos desde props
        <article className='task-card'>
            <div className='task-card-header'>
                <h2>{task.title}</h2>
                <span className={`task-status ${task.status}`} >
                    {task.status}
                </span>
            </div>
            
            <p className='task-description'>{task.description}</p>
            
            <div className='task-card-footer'>
                <span className={`task-priority ${task.priority}`} >
                    {task.priority}
                </span>
            </div> 
        </article>
    )
}

export default TaskCard