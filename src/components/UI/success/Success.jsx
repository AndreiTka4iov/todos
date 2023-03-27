import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/success/success.module.css'

function Success() {
    const mode = useSelector(state => state.mode.dark)
    const todos = useSelector(state => state.todos)

    return (
        <div className={mode ? cl.success + " " + cl.dark : cl.success}>
            <h3>Ваши успехи</h3>
            <div className={cl.data}>
                <div className={cl.item}>
                    Создано
                    <div className={cl.circle}>
                        <h3>{todos.todos.length}</h3>
                        <span>Задач</span>
                    </div>
                </div>
                <div className={cl.item}>
                    Завершено
                    <div className={cl.circle}>
                        <h3>{todos.success.length}</h3>
                        <span>Задач</span>
                    </div>
                </div>
                <div className={cl.item}>
                    Удалено
                    <div className={cl.circle}>
                        <h3>{todos.remove}</h3>
                        <span>Задач</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success