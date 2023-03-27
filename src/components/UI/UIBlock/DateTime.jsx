import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/UIBlock/DateTime.module.css'

function DateTime() {
    const mode = useSelector(state => state.mode.dark)
    const [time, setTime] = useState("00:00:00")
    const [date, setDate] = useState("01.01.1970")

    setInterval(() => {
        let date = new Date()
        let h = String(date.getHours()).padStart(2, '0')
        let m = String(date.getMinutes()).padStart(2, '0')
        let s = String(date.getSeconds()).padStart(2, '0')
        let dateFormat = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"})
        setTime(h + ":"+m+':'+s)
        setDate(dateFormat.format(date))
    })

    return (
        <div className={mode ? cl.dateTimeBlock + " " + cl.dark : cl.dateTimeBlock}>
            <h3>Дата и время</h3>
            <div className={cl.info}>
                <div className={cl.comp}>
                    <p>На часах</p>
                    <div className={cl.text}>
                        <span className="material-symbols-outlined">schedule</span>
                        <p>{time}</p>
                    </div>
                </div>
                <div className={cl.comp}>
                    <p>Сегодня</p>
                    <div className={cl.text}>
                        <span className="material-symbols-outlined">calendar_today</span>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateTime