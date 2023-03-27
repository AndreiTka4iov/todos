import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/UIBlock/DateTime.module.css'

function Fact() {
    const mode = useSelector(state => state.mode.dark)
    return (
        <div className={mode ? cl.dateTimeBlock + " " + cl.dark : cl.dateTimeBlock}>
            <h3>Факт дня</h3>
            <div className={cl.info}>
                Человек, который встаёт в 6 утра, по статистике, закрывает все задачи к 18:00 вечера. <br /> попробуем также?
            </div>
        </div>
    )
}

export default Fact