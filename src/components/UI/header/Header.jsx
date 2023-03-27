import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../styles/header/header.module.css'
import ButtonIcon from '../button/ButtonIcon'
import HeaderButton from '../user/HeaderButton'

function Header() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)

  return (
    <header className={cl.header}>
        <div className={cl.flex}>
          <ButtonIcon icon={'control_point'}>Новая задача</ButtonIcon>
          {mode 
          ? <span className={cl.modeDark + " material-symbols-outlined"} onClick={() => dispatch({type: "SET_LIGHT"})}>light_mode</span>
          : <span className={cl.mode + " material-symbols-outlined"} onClick={() => dispatch({type: "SET_DARK"})}>nightlight</span>
          }  
          <HeaderButton></HeaderButton>
        </div>
    </header>
  )
}

export default Header