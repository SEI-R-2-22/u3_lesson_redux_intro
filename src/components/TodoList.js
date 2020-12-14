import React from 'react'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
// import Favorites from '../../optional-fav-component/Favorites'
import { AddTodo, RemoveTodo, CreateNewTodo, MarkComplete, AddFavorite, RemoveFavorite } from '../store/actions/TodoActions'
import { Favorite } from '@material-ui/icons';

const TodoList = (props) => {
// console.log(props)

const handleChange = (event) => {
    props.createTodo(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.addTodo(props.todoState.newTodo)
}

const handleDelete = (event, index) => {
    event.preventDefault()
    props.removeTodo(index)
}

const markAsComplete = (event, index) => {
    event.preventDefault()
    props.markComplete(index)
}

const addAFavorite = (event, index) => {
    event.preventDefault()
    props.addFavorite(index)
}

const delFavorite = (event, index) => {
    event.preventDefault()
    props.removeFavorite(index)
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    }));

const s = {
    compWrapper: {
        width: "40vw",
        minWidth: "600px",
        margin: "0 auto"
    },
    category: {
        marginTop: "30px",
        marginBottom: "60px"
    },
    headers: {
        marginTop: "50px",
        borderBottom: "1px solid gray",
        textAlign: "left",
        fontSize: "18px"
    },
    itemWrapper: {
        display: "flex",
        justifyContent: "space-between"
    },
    items: {
        textAlign: "left",
        fontSize: "16px",
        display: "inline-block"
    },
    buttonWrapper: {
        marginRight: "0px"
    },
    buttons: {
        display: "inline-block", 
    }
}

const classes = useStyles();
return (
    <div style={s.compWrapper}>
        <h2 style={{marginBottom: "25px"}}>Excessively Styled To-Do List</h2>
        <TodoForm newTodo={props.todoState.newTodo} handleChange={handleChange} handleSubmit={handleSubmit} />
        
        <div style={s.category}>
            <h4 style={s.headers}>To-Do List</h4>
            {props.todoState.todos.map((todo, index) => (
                <div style={s.itemWrapper} key={`${index}wrapper`}>
                    <li style={s.items} key={index}>{todo}</li>
                    <div style={s.buttonWrapper}>
                        
                        <IconButton aria-label="complete" style={s.buttons} key={`${index}button2`} onClick={(e) => markAsComplete(e, index)}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton aria-label="favorite" style={s.buttons} key={`${index}button3`} onClick={(e) => addAFavorite(e, index)}>
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton aria-label="delete" style={s.buttons} key={`${index}button`} onClick={(e) => handleDelete(e, index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    </div>
                </div>
                ))}
            </div>

        <div style={s.category}>
            <h4 style={s.headers}>Completed Tasks</h4>
            {props.todoState.completedTodos.map((completeTodo, index) => (
                <div style={s.itemWrapper} key={`${index}wrapper2`}>
                    <li style={s.items} key={`${index}complete`}>{completeTodo}</li>
                <IconButton aria-label="delete" style={s.buttons} key={`${index}button`} onClick={(e) => handleDelete(e, index)}>
                    <HighlightOffIcon />
                </IconButton>
                </div>
                ))}
        </div>

        <div style={s.category}>
            <h4 style={s.headers}>Favorites</h4>
                {props.todoState.favoriteTodos.map((favorite, index) => (
                    <div style={s.itemWrapper} key={`${index}wrapper3`}>
                        <li style={s.items} key={`${index}favorite`}>{favorite}</li>
                        <div style={s.buttonWrapper}>
                            <IconButton color="secondary" style={s.buttons} key={`${index}button4`} onClick={(e) => delFavorite(e, index)}>
                                <FavoriteIcon />
                            </IconButton>
                        </div>
                    </div>
            ))}
        </div>







        {/* <Favorites /> */}
    </div>
)
}

const mapStateToProps = (state) => {
//   console.log(state)
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
    addFavorite: (index) => dispatch(AddFavorite(index)),
    removeFavorite: (index) => dispatch(RemoveFavorite(index)),
}
}

export default connect(mapStateToProps, mapActionsToProps)(TodoList)