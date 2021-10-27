import React from "react"
import styles from "./TodoItem.module.css"
import {useState} from 'react'

function TodoItem(props) {

  const [state, setState] = useState({ editing: false,})
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const handleEditing = () => {
    console.log("edit mode activated")
    setState({
      editing: true,
    })
  }

  const { completed, id, title } = props.todo
  console.log(state);
  return (
    <li className={styles.item}>
      <div onClick={ handleEditing }>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
    </li>
  )


}

export default TodoItem