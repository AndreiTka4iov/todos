import { useDispatch, useSelector } from "react-redux";


export default function useTodos(initialValue) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const newId = todos.length + 1
    
    const makeNew = () => {
        const {titleValue, typeValue, dateValue} = initialValue
        const newTodo = {id: newId, title: titleValue, type: typeValue, date: dateValue}
        
        dispatch({type: "ADD_TODO", payload: newTodo})
        dispatch({type: "CLOSE_ADD"})
    }
        
    return {makeNew}
}