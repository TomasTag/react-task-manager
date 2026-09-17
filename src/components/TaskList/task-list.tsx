import TaskCard from '../TaskCard/task-card'
import EmptyState from '../empty-state'
import type { Task } from '../../types/task'
import { listIsEmpty }  from './use-task-list'

function TaskList({ tasks }: { tasks: Task[] }) {
  
  const { isEmpty } = listIsEmpty(tasks)
  
  if (isEmpty) {
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