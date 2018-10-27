import React, { Component } from 'react'
import classNames from 'classnames'

class Todo extends Component {
  onClick = () => this.props.toggleTodo(this.props.id)
  render() {
    const { id, todo } = this.props
    return (
      <li
        key={id}
        onClick={this.onClick}
        className={classNames('todo', {
          'opacity-25': todo.checked
        })}
      >
        <span className="todo-bullet" />
        {todo.value}
      </li>
    )
  }
}

export default Todo
