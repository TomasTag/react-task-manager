import TaskCard from '../TaskCard/task-card'
import EmptyState from '../empty-state'
import type { Task } from '../../types/task'
import { listIsEmpty }  from './use-task-list'

function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: {
  tasks: Task[]
  onStatusChange: (id: string) => void
  onDelete: (id: string) => void
}) {
  
  const { isEmpty } = listIsEmpty(tasks)
  
  if (isEmpty) {
        return <EmptyState />
      }
    
      return (
        <div className='task-list'>
          {tasks.map((task) => (
            <TaskCard 
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}/>
          ))}
        </div>
      )
}

export default TaskList