import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/UIBlock/DateTime.module.css'
import Chart from '../Charts/Chart'

function Grade() {
    const mode = useSelector(state => state.mode.dark)
    return (
        <div className={mode ? cl.dateTimeBlock + " " + cl.dark : cl.dateTimeBlock}>
            <h3>График успеваемости</h3>
            <div className={cl.info}>
                <Chart/>
            </div>
        </div>
    )
}

export default Grade