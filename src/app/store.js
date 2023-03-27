import { configureStore } from '@reduxjs/toolkit';
import { addReducer } from '../store/addReducer';
import { burgerReducer } from '../store/burgerReducer';
import { modeReducer } from '../store/modeReducer'
import { todosReducer } from '../store/todosReducer';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    add: addReducer,
    todos: todosReducer,
    burger: burgerReducer,
  },
});
