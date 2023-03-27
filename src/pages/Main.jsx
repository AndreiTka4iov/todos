import React from 'react'
import cl from '../components/styles/main/main.module.css'
import RecList from '../components/UI/RecList'
import TasksBlock from '../components/UI/TasksBlock'

function Main() {
  return (
    <div className={cl.main}>
      <div className={cl.flexMain}>
        <TasksBlock/>
        <RecList/>
      </div>
    </div>
  )
}

export default Main