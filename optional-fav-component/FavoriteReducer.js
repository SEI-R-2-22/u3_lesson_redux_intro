import {ADD_TODO, NEW_TODO, REMOVE_TODO, MARK_COMPLETE, ADD_FAVORITE, REMOVE_FAVORITE} from "../src/store/types"


const initialState = {
    favorites: []
}

const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_FAVORITE:
        return { ...state, favorites: [...state.todos, action.payload]}
    case REMOVE_FAVORITE:
        state.todos.splice(action.index, 1)
        return { ...state }
    default:
        return { ...state }
    }
}

export default FavoritesReducer