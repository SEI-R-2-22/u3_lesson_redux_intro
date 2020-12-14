import { ADD_TODO, NEW_TODO, REMOVE_TODO, MARK_COMPLETE, ADD_FAVORITE, REMOVE_FAVORITE} from "../types";


/* ToDoList Component */
export const AddTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const CreateNewTodo = (formValue) => ({
    type: NEW_TODO,
    payload: formValue
})

export const RemoveTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index
})

export const MarkComplete = (index) => ({
    type: MARK_COMPLETE,
    payload: index
})



/* Favorites Component */
export const AddFavorite = (index) => ({
    type: ADD_FAVORITE,
    payload: index
})

export const RemoveFavorite = (index) => ({
    type: REMOVE_FAVORITE,
    payload: index
})