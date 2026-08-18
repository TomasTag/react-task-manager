import type { Task } from '../types/task'

function TaskCard({ task }: { task: Task }){ //task: Task te dice de que tipo tiene que ser la variable que
    return (                                 //cargamos desde props
        <article>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
        </article>
    )
}

export default TaskCard