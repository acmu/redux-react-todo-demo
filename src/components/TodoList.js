import React from 'react';
import PropTypes from 'prop-types';
import Todo from './TodoItem';

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => (
      // 这里onClick为什么要放到函数里？
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
