const defaultState = {
    add: false,
}

export const addReducer = (state = defaultState, action) => {
    switch (action.type){
        case "OPEN_ADD":
            return {...state, add: true}
        case "CLOSE_ADD":
            return {...state, add: false}
        default: 
            return state
    }
} 