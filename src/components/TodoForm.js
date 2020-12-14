import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const TodoForm = (props) => {
  const classes = useStyles();
  return (
    <form>
      <TextField id="standard-basic" label="add item" type="text" name="newTodo" value={props.newTodo} onChange={props.handleChange} />
      {/* <input type="text" name="newTodo" value={props.newTodo} onChange={props.handleChange} /> */}
      <IconButton type="submit" onClick={props.handleSubmit}><AddIcon style={{paddingBottom: "0"}}/></IconButton>
    </form>
  )
}

export default TodoForm