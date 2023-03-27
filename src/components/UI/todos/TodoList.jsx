import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cl from '../../styles/todoList/TodoList.module.css'

function TodoList() {
    const dispatch = useDispatch()
    const url = useLocation()
    const mode = useSelector(state => state.mode.dark)
    const todo = useSelector(state => state.todos)
    const [items, setItems] = useState([])
    const [success, setSuccess] = useState([])

    useEffect(() => {
        if (url.pathname === '/todos/home'){
            const result = todo.todos.filter(todo => todo.type === '1')
            setItems([...result])

            const success = todo.success.filter(todo => todo.type === '1')
            setSuccess([...success])
        }
        if (url.pathname === '/todos/family'){
            const result = todo.todos.filter(todo => todo.type === '2')
            setItems([...result])

            const success = todo.success.filter(todo => todo.type === '2')
            setSuccess([...success])
        }
        if (url.pathname === '/todos/work'){
            const result = todo.todos.filter(todo => todo.type === '3')
            setItems([...result])

            const success = todo.success.filter(todo => todo.type === '3')
            setSuccess([...success])
        }
        if (url.pathname === '/todos/sport'){
            const result = todo.todos.filter(todo => todo.type === '4')
            setItems([...result])

            const success = todo.success.filter(todo => todo.type === '4')
            setSuccess([...success])
        }
    }, [url, todo])

    function removeElem(e) {
        dispatch({type: "REMOVE_TODO", payload: e})
    }

    function removeElemSuccess(e) {
        dispatch({type: "REMOVE_SUCCESS_TODO", payload: e})
    }

    function successTodo(e){
        const days = [
            'ВС',
            'ПН',
            'ВТ',
            'СР',
            'ЧТ',
            'ПТ',
            'СБ'
          ];
        const d = new Date();
        const n = d.getDay();

        const success = todo.todos.filter(todo => {return todo.id === e})
        success[0] = {
            ...success[0],
            day: days[n]
        }
        dispatch({type: "SUCCESS_TODO", payload: success})
    }
    
    return (
        <div className={mode ? cl.todos + " " + cl.dark : cl.todos}>
            <h3>Активные задачи</h3>
            {items.length === 0 
            ? 
            <div className={cl.clear}>
                <span className="material-symbols-outlined">list_alt_add</span><br />
                Список пуст
            </div>
            : ''
            }
            {items.map(item =>
                <div key={item.id} className={cl.item}>
                    <p onClick={() => successTodo(item.id)}>{item.title}</p>
                    <span className="material-symbols-outlined" onClick={() => removeElem(item.id)}>delete</span>
                </div>
            )}
            <h3>Завершенные задачи</h3>
            {success.length === 0 
            ? 
            <div className={cl.clear}>
                <span className="material-symbols-outlined">list_alt_add</span><br />
                Список пуст
            </div>
            : ''
            }
            {success.map(item =>
                <div key={item.id} className={cl.item + " " + cl.success}>
                    <p>{item.title}</p>
                    <span className="material-symbols-outlined" onClick={() => removeElemSuccess(item.id)}>delete</span>
                </div>
            )}
        </div>
    )
}

export default TodoList