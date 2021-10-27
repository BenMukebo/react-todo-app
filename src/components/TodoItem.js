// import React from "react"
import { Component } from "react"
import styles from "./TodoItem.module.css"

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

class TodoItem extends Component{
  constructor(props) {
    super(props)
    // const { completed, id, title } = this.props.todo;
    this.state = {
      editing: false,
      completed: props.todo.completed,
      id: props.todo.id,
      title: props.todo.title
    }

  }
  handleEditing = () => {
    console.log("edit mode activated")
  }
  

  render() {
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing }>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.state.completed}
            onChange={() => this.props.handleChangeProps(this.state.id)}
          />
          <button onClick={() => this.props.deleteTodoProps(this.state.id)}>Delete</button>
          <span style={this.state.completed ? completedStyle : null}>{this.state.title}</span>
        </div>
        {/* <input type="text" className={styles.textInput} /> */}
      </li>
    )
  }
}

export default TodoItem