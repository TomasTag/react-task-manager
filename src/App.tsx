import TaskHeader from './components/TaskHeader'
import TaskList from './components/TaskList'
import type { Task } from './types/task'

import './components/app.css'

function App() {

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Create task manager',
      description: 'Buil the initial Task Manager Interface',
      status: 'in_progress',
      priority:'high',
    },
    {
      id: '2',
      title: 'Create TaskCard',
      description: 'Build the component for individual tasks',
      status: 'todo',
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Review project',
      description: 'Review the Task Manager implementation',
      status: 'done',
      priority: 'low',
    },
  ]

  return (
    <main className='app'>
      <TaskHeader />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
