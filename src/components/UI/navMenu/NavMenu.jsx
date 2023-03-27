import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cl from '../../styles/navMenu/navMenu.module.css'
import NavBlock from './block/NavBlock'

function NavMenu() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)
  const show = useSelector(state => state.burger.burger)
  return (
    <nav className={mode 
                    ? show ? cl.navMenu + " " + cl.dark + " " + cl.show
                      : cl.navMenu + " " + cl.dark 
                    : show ? cl.navMenu + " " + cl.show
                      : cl.navMenu
                  }>
        <Link to={'/todos/'} className={cl.logo} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <img src="/todos/images/logo.svg" alt="" />
        </Link>
        <NavBlock/>
        <Link to={'/todos/'} className={cl.exit} onClick={() => dispatch({type: "HIDE_BURGER"})}>
          <i className='bx bx-exit' ></i>
          <p>Выйти</p>
        </Link>
        <a href="https://www.figma.com/@oter" className={cl.design}>Design by CupTeam</a>
    </nav>
  )
}

export default NavMenu