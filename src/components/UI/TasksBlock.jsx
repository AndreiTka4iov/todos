import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import cl from '../styles/tasksBlock/TasksBlock.module.css'
import Success from './success/Success'
import TodoList from './todos/TodoList'

function TasksBlock() {
  return (
    <div className={cl.tasks}>
        <Success/>
        <Routes>
          <Route path='/todos/' element={<About />}/>
          <Route path='/todos/home' element={<TodoList />}/>
          <Route path='/todos/family' element={<TodoList />}/>
          <Route path='/todos/work' element={<TodoList />}/>
          <Route path='/todos/sport' element={<TodoList />}/>
        </Routes>
    </div>
  )
}

export default TasksBlock