import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTodos from '../../../hooks/data/useTodos'
import useInput from '../../../hooks/useInput'
import cl from '../../styles/makeNew/MakeNew.module.css'

function MakeNew() {
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const mode = useSelector(state => state.mode.dark)
    const add = useSelector(state => state.add.add)
    const title = useInput('')
    const type = useInput('')
    const date = useInput('')
    let titleValue = title.value
    let typeValue = type.value
    let dateValue = date.value
    const todo = useTodos({titleValue, typeValue, dateValue}) 

    function close(e){
        if (e.target !== e.currentTarget) return
        dispatch({type: "CLOSE_ADD"})
    }

    function MakeNew() {
        if (titleValue !== "" && typeValue !== "" && dateValue !== ""){
            todo.makeNew()
            title.clearValue()
            type.clearValue()
            date.clearValue()
            setError(false)
        }else{
            setError('Заполните все поля')
        }
    }

  return (
    <div className={mode 
        ? add 
            ? cl.screen +" "+cl.dark + " " + cl.active
            : cl.screen +" "+cl.dark
        : add 
            ? cl.screen + " " + cl.active
            : cl.screen
        } 
        id="add" 
        onClick={(e) => close(e)}>
        <div className={cl.make}>
            <h3>Добавить новую задачу</h3>
            <div className={cl.content}>
                <h4>Что нужно сделать?</h4>
                {!error 
                ? ""
                : <span style={{color: "#F05454"}}>{error}</span>
                }
               
                <input type="text" value={title.value} onChange={(e) => title.onChange(e)}/>
                <div className={cl.setting}>
                    <div className={cl.inp}>
                        <h4>Категория</h4>
                        <select defaultValue={'DEFAULT'} onChange={(e) => type.onChange(e)}>
                            <option value="DEFAULT" disabled>Выбрать</option>
                            <option value="1">Дом</option>
                            <option value="2">Семья</option>
                            <option value="3">Работа</option>
                            <option value="4">Спорт</option>
                        </select>
                    </div>
                    <div className={cl.inp}>
                        <h4>Когда?</h4>
                        <input type="date" onChange={(e) => date.onChange(e)}/>
                    </div>
                </div>
            </div>
            <div className={cl.btn}>
                <button className={cl.cancel} onClick={() => dispatch({type: "CLOSE_ADD"})}>Отменить</button>
                <button className={cl.add} onClick={() => MakeNew()}>Добавить</button>
            </div>
        </div>
    </div>
  )
}

export default MakeNew