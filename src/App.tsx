import { useState } from 'react'
import type { Task } from './types/task'

import TaskHeader from './components/TaskHeader/task-header'
import TaskList from './components/TaskList/task-list'
import { tasks } from './mockup/task-mockup-list'

import './app-styled.css'

function App() {
  const [taskList, setTaskList] = useState<Task[]>(tasks)
  
  const handleStatusChange = (id: string) => {
    setTaskList((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== id) {
          return task
        }

        if (task.status === 'todo') {
          return {...task, status: 'in_progress'}
        }

        if (task.status === 'in_progress') {
          return {...task, status: 'done'}
        }

        return task
      }), 
    )
  }

  const handleDelete = (id: string) => {
    setTaskList((currentTasks) => 
      currentTasks.filter((task) => task.id !== id),
    )
  }

  return (
    <main className='app'>
      <TaskHeader />
      <TaskList
        tasks={taskList}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  )
}

export default App