import TaskHeader from './components/TaskHeader/task-header'
import TaskList from './components/TaskList/task-list'
import { tasks } from './mockup/task-mockup-list'

import './app-styled.css'

function App() {
  return (
    <main className='app'>
      <TaskHeader />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App
