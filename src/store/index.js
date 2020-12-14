import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TodoReducer from './reducers/TodoReducer'
import AppReducer from './reducers/AppReducer'

const store = createStore(
    combineReducers({ todoState: TodoReducer, appState: AppReducer }),
    composeWithDevTools()
)

export default store