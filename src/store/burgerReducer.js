const defaultState = {
    burger: false,
}

export const burgerReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SHOW_BURGER":
            return {...state, burger: true}
        case "HIDE_BURGER":
            return {...state, burger: false}
        default: 
            return state
    }
} 