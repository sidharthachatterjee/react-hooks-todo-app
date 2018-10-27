import React from 'react'
import classNames from 'classnames'

const Todo = ({ id, todo: { value, checked }, toggleTodo }) => (
  <li
    onClick={() => toggleTodo(id)}
    className={classNames('todo', {
      'opacity-25': checked
    })}
  >
    <span className="todo-bullet" />
    {value}
  </li>
)

export default Todo
