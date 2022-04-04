const TodoForm = (props) => {

  return (
    <form>
      <input
        type="text"
        name="newTodo"
        value={props.newTodo.text}
        onChange={props.handleChange}
      />
      <button type="submit" onClick={props.handleSubmit}>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm
