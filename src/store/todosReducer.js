const defaultState = {
    todos: [
        {id: 30, title: "Приготовить жареную картошку", type: "1", date: "2023-03-27"},
        {id: 60, title: 'Устроиться на работу', type: "3", date: "2023-03-27"},
        {id: 80, title: 'Сходить на утреннюю пробежку', type: "4", date: "2023-03-27"},
        {id: 90, title: 'Сходить в спортзал', type: "4", date: "2023-03-27"},
    ],
    success: [
        {id: 10, title: "Сделать портфолио", type: "3",date: "2023-03-27", day: "ПН"},
        {id: 200, title: 'Сделать проект "Авторизация на сайте"', type: "3", date: "2023-03-27", day: "ВТ"},
        {id: 70, title: 'Подготовиться к собеседованию', type: "3", date: "2023-03-27", day: "СР"},
        {id: 40, title: 'Сделать проект "Список постов"', type: "3", date: "2023-03-27", day: "ЧТ"},
        {id: 50, title: 'Сделать проект "Список задач"', type: "3", date: "2023-03-27", day: "ПТ"},
        {id: 100, title: 'Купить вебкамеру', type: "1", date: "2023-03-27", day: "ВТ"},
    ],
    remove: 3
}

export const todosReducer = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
        case "REMOVE_TODO":
            const newArray = state.todos.filter(old => old.id !== action.payload)
            return{...state, todos: [...newArray], remove: state.remove + 1}
        case "SUCCESS_TODO":
            const newArrayTodo = state.todos.filter(old => old.id !== action.payload[0].id)
            return{...state, success: [...state.success, ...action.payload], todos: [...newArrayTodo]}
        case "REMOVE_SUCCESS_TODO":
            const newSuccessArray = state.success.filter(old => old.id !== action.payload)
            return{...state, success: [...newSuccessArray], remove: state.remove + 1}
        default: 
            return state
    }
} 