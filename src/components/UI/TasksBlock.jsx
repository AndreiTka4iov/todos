import React from 'react'
import cl from '../styles/tasksBlock/TasksBlock.module.css'
import Success from './success/Success'

function TasksBlock() {
  return (
    <div className={cl.tasks}>
        <Success/>
    </div>
  )
}

export default TasksBlock