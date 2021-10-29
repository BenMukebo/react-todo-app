import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

// class TodosList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.todos.map(todo => (
//         //   <li key={todo.id}>{todo.title}</li>
//         <TodoItem key={todo.id} todo={todo}
//          handleChangeProps={this.props.handleChangeProps}
//          deleteTodoProps={this.props.deleteTodoProps}
//          setUpdate={this.props.setUpdate}
//          />
//         ))}
//       </ul>
//     )
//   }
// }

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf({
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
