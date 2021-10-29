/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('cleaning');
  }

  handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    const { id, title, completed } = todos;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />

          <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            setUpdateProps(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}
TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf({
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
};
export default TodoItem;
