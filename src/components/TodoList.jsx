import { connect } from 'react-redux'
import { AddTodo, RemoveTodo, CreateNewTodo, MarkComplete, SortTodos } from '../store/actions/TodoActions'
import TodoForm from './TodoForm'

const TodoList = (props) => {

  const handleChange = (event) => {
    props.createTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addTodo(props.todoState.newTodo)
  }

  return (
    <div>
      <TodoForm 
        newTodo={props.todoState.newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <button onClick={props.sortTodos}>Sort by Completion</button>
      {props.todoState.todos.map((todo, index) => (
        <div key={index} className="todo" style={{ backgroundColor: todo.isComplete ? 'Green' : 'Grey' }}>
          <h3>{todo.text}</h3>
          <button onClick={() => props.markComplete(index)}>{todo.isComplete ? 'Incomplete' : 'Complete'}</button> 
          <button onClick={() => props.removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    todoState: state.todoState
  }
}

const mapActionsToProps = (dispatch) => {

  return {
    addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
    removeTodo: (index) => dispatch(RemoveTodo(index)),
    createTodo: (formValue) => dispatch(CreateNewTodo(formValue)),
    markComplete: (index) => dispatch(MarkComplete(index)),
    sortTodos: () => dispatch(SortTodos())
  }
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)
