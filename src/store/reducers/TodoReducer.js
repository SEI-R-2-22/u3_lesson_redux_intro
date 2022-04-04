import { ADD_TODO, NEW_TODO, REMOVE_TODO } from "../types"

const initialState = {
  todos: [],
  newTodo: ''
}

const TodoReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    case NEW_TODO:
      return { ...state, newTodo: action.payload }
    case REMOVE_TODO:
      return { ...state }
    default:
      return { ...state }
  }
}

export default TodoReducer
