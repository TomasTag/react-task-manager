import type { Task } from '../../types/task'
import './task-card-styled.css'

function TaskCard({ task }: { task: Task }){ //task: Task sepecifies the type of the props
    return (                                 
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