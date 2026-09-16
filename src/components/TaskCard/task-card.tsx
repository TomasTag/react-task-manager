import type { Task } from '../../types/task'
import './task-card-styled.css'

function TaskCard({
  task,
  onStatusChange,
  onDelete,
}: {
  task: Task
  onStatusChange: (id: string) => void
  onDelete: (id: string) => void
}) {
    return (                                 
        <article className='task-card'>     
            <div className='task-card-header'>
                <h2>{task.title}</h2>
                
                <span className={`task-status ${task.status}`} >
                    {task.status}
                </span>
            </div>
            
            <p className='task-description'>
                {task.description}
            </p>
            
            <div className='task-card-footer'>
                <span className={`task-priority ${task.priority}`} >
                    {task.priority}
                </span>

                <button onClick={() => onStatusChange(task.id)}>
                    Change status
                </button>

                <button onClick={() => onDelete(task.id)}> 
                    Delete
                </button>
            </div> 
        </article>
    )
}

export default TaskCard