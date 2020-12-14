import React from 'react'
import { connect } from 'react-redux'
import { AddFavorite, RemoveFavorite} from '../src/store/actions/TodoActions'

const Favorites = (props) => {
// console.log(props)

// const addFavorite = (event, index) => {
//     event.preventDefault()
//     props.removeTodo(index)
// }

const delFavorite = (event, index) => {
    event.preventDefault()
    props.removeFavorite(index)
}


const s = {
    compWrapper: {
        width: "40vw",
        margin: "0 auto"
    },
    headers: {
        marginTop: "50px",
        borderBottom: "1px solid gray",
        textAlign: "left",
        fontSize: "18px"
    },
    items: {
        textAlign: "left",
        fontSize: "12px",
        display: "inline-block"
    },
    buttons: {
        display: "inline-block", 
        marginLeft: "15px"
    }
}


return (
    <div style={s.compWrapper}>
        <h4 style={s.headers}>Favorites</h4>
        {props.favoriteState.favorites.map((todo, index) => (
            <div key={`${index}wrapper`} style={{ marginTop: "15px"}}>
                <li style={s.items} key={index}>{todo}</li>
                <button style={s.buttons} key={`${index}button`} onClick={(e) => delFavorite(e, index)}>x</button>
            </div>
            ))}
    </div>
)
}

const mapStateToProps = (state) => {
//   console.log(state)
return {
    favoriteState: state.favoriteState
}
}

const mapActionsToProps = (dispatch) => {
return {
    addFavorite: (newTodo) => dispatch(AddFavorite(newTodo)),
    removeFavorite: (index) => dispatch(RemoveFavorite(index)),
}
}

export default connect(mapStateToProps, mapActionsToProps)(Favorites)