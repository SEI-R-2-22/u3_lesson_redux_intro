import {ADD_TODO, NEW_TODO, REMOVE_TODO, MARK_COMPLETE, ADD_FAVORITE, REMOVE_FAVORITE} from "../types"


const initialState = {
    todos: [],
    newTodo: '',
    completedTodos: [], 
    favoriteTodos: []
  }
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload], newTodo: "" }

      case NEW_TODO:
        return { ...state, newTodo: action.payload }

      case REMOVE_TODO:
        state.todos.splice(action.index, 1)
        return { ...state }

      case MARK_COMPLETE:
        const completedTodo = state.todos.splice(action.index, 1)
        state.completedTodos.push(completedTodo)
        return { ...state }

      case ADD_FAVORITE:
        const favoritedToDo = state.todos.splice(action.index, 1)
        state.favoriteTodos.push(favoritedToDo)
          return { ...state}

      case REMOVE_FAVORITE:
        const unfavoritedToDo = state.favoriteTodos.splice(action.index, 1)
        state.todos.push(unfavoritedToDo)
          return { ...state }

      default:
        return { ...state }
    }
  }
  
  export default TodoReducer