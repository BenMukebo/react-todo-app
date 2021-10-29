/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdateProps={props.setUpdateProps}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf({
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodoList;
