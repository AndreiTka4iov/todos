import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../styles/darkScreen/darkScreen.module.css'

function DarkScreen() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.burger.burger)
    function closeBurger(e) {
        if (e.target !== e.currentTarget) return
        dispatch({type: "HIDE_BURGER"})
    }
  return (
    <div 
    className={show ? cl.darkScreen + " " + cl.show : cl.darkScreen}
    onClick={(e) => closeBurger(e)}
    ></div>
  )
}

export default DarkScreen