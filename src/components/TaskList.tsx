import TaskCard from './TaskCard'
import EmptyState from './EmptyState'
import type { Task } from '../types/task'
import './TaskList.css'

function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return <EmptyState />
  }

  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList