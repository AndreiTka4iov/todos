import React from 'react'
import { useDispatch } from 'react-redux'
import cl from '../../styles/button/ButtonIcon.module.css'

function ButtonIcon({children, icon}) {
  const dispatch = useDispatch()
  return (
    <button className={cl.button} onClick={() => dispatch({type: "OPEN_ADD"})}>
        <span className="material-symbols-outlined">{icon}</span>
        {children}
    </button>
  )
}

export default ButtonIcon