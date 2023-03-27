import React from 'react'
import cl from '../styles/blockPage/w50.module.css'
import Grade from './UIBlock/Grade'
import DateTime from './UIBlock/DateTime'
import Fact from './UIBlock/Fact'

function RecList() {
  return (
    <div className={cl.blockPage}>
        <DateTime/>
        <Fact/>
        <Grade/>
    </div>
  )
}

export default RecList