import type { Task } from '../../types/task'
import './task-list-styled.css'

export function listIsEmpty( tasks: Task[] ){
    const isEmpty = tasks.length === 0

    return {
      isEmpty,
    }
}