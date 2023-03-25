import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from '../../../styles/navMenu/navBlock/navBlock.module.css'
function NavBlock() {
  return (
    <div className={cl.category}>
        <h3>Категории</h3>
        <NavLink to={'/home'} className={cl.navLink}>
          <i className='bx bx-home-alt'></i>
          <p>Дом</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/family'} className={cl.navLink}>
          <i className='bx bx-group'></i>
          <p>Семья</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/work'} className={cl.navLink}>
          <i className='bx bx-briefcase-alt' ></i>
          <p>Работа</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/sport'} className={cl.navLink}>
          <i className='bx bx-run'></i>
          <p>Спорт</p>
          <div className={cl.active}></div>
        </NavLink>
        <NavLink to={'/make-new'} className={cl.navLink + " " + cl.add}>
          <i className='bx bx-add-to-queue'></i>
          <p>Добавить</p>
          <div className={cl.active}></div>
        </NavLink>
        <h3>Данные</h3>
        <NavLink to={'/make-new'} className={cl.navLink}>
          <i className='bx bx-bar-chart-square' ></i>
          <p>Статистика</p>
          <div className={cl.active}></div>
        </NavLink>
    </div>
  )
}

export default NavBlock