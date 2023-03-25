import React from 'react'
import { Link } from 'react-router-dom'
import cl from '../../styles/navMenu/navMenu.module.css'
import NavBlock from './block/NavBlock'

function NavMenu() {
  return (
    <nav className={cl.navMenu}>
        <Link to={'/'} className={cl.logo}>
          <img src="/images/logo.svg" alt="" />
        </Link>
        <NavBlock/>
        <Link to={'/'} className={cl.exit}>
          <i className='bx bx-exit' ></i>
          <p>Выйти</p>
        </Link>
        <a href="https://www.figma.com/@oter" className={cl.design}>Design by CupTeam</a>
    </nav>
  )
}

export default NavMenu