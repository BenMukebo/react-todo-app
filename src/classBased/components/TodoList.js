/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}
TodoList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
  todos: PropTypes.string.isRequired,
};

export default TodoList;
