import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cl from '../../../styles/navMenu/navBlock/navBlock.module.css'
function NavBlock() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)

  return (
    <div className={mode ? cl.category + " " + cl.dark : cl.category}>
        <h3>Категории</h3>
        <NavLink to={'/todos/home'} className={({isActive}) => isActive ? cl.navLink + " " + cl.active : cl.navLink} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <i className='bx bx-home-alt'></i>
          <p>Дом</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/todos/family'} className={({isActive}) => isActive ? cl.navLink + " " + cl.active : cl.navLink} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <i className='bx bx-group'></i>
          <p>Семья</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/todos/work'} className={({isActive}) => isActive ? cl.navLink + " " + cl.active : cl.navLink} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <i className='bx bx-briefcase-alt' ></i>
          <p>Работа</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/todos/sport'} className={({isActive}) => isActive ? cl.navLink + " " + cl.active : cl.navLink} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <i className='bx bx-run'></i>
          <p>Спорт</p>
          <div className={cl.active}></div>
        </NavLink>
    </div>
  )
}

export default NavBlock