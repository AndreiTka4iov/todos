import React from 'react'
import cl from '../../styles/button/ButtonIcon.module.css'

function ButtonIcon({children, icon}) {
  return (
    <button className={cl.button}>
        <span className="material-symbols-outlined">{icon}</span>
        {children}
    </button>
  )
}

export default ButtonIcon