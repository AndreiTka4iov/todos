import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cl from '../../styles/user/HeaderButton.module.css'

function HeaderButton() {
    const mode = useSelector(state => state.mode.dark)
  return (
    <Link to={'/todos/'} className={mode ? cl.userBtn + " " + cl.dark : cl.userBtn}>
        <p>Хорошего дня, Username</p>
        <img src="/images/user.png" alt="" />
    </Link>
  )
}

export default HeaderButton