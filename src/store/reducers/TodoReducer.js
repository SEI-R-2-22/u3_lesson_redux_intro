import { ADD_TODO, NEW_TODO, REMOVE_TODO, MARK_COMPLETE, SORT_TODOS } from "../types"

const initialState = {
  todos: [{ text: 'Make Memes', isComplete: false }],
  newTodo: {
    text: '',
    isComplete: false
  },
  sorted: false
}

const TodoReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], newTodo: { ...state.newTodo, text: '' } }
    case NEW_TODO:
      return { ...state, newTodo: { ...state.newTodo, text: action.payload } }
    case REMOVE_TODO:
      state.todos.splice(action.payload, 1)
      return { ...state, todos: state.todos }
    case MARK_COMPLETE:
      const completedTodos = state.todos.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        return todo
      })
      return { ...state, todos: completedTodos }
    case SORT_TODOS:
      const sortedTodos = state.todos.sort((a, b) => {
        if (state.sorted) {
          return a.isComplete - b.isComplete
        } else {
          return b.isComplete - a.isComplete
        }
      })
      if (state.sorted) {
        return { ...state, todos: sortedTodos, sorted: false }
      } else {
        return { ...state, todos: sortedTodos, sorted: true }
      }
    default:
      return { ...state }
  }
}

export default TodoReducer
