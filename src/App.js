import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

import Todo from './Todo'

class App extends Component {
  state = {
    inputValue: '',
    todos: {}
  }

  addTodo = todo => {
    this.setState({
      inputValue: '',
      todos: {
        ...this.state.todos,
        [uuidv4()]: todo
      }
    })
  }

  toggleTodo = id => {
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: {
          ...this.state.todos[id],
          checked: !this.state.todos[id].checked
        }
      }
    })
  }

  onKeyDownHandler = event => {
    if (event.keyCode === 13) {
      this.addTodo({
        value: this.state.inputValue,
        checked: false
      })
    }
  }

  onChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { inputValue, todos } = this.state
    return (
      <main className="app container mx-auto">
        <h1>To Do</h1>
        <input
          value={inputValue}
          placeholder="Add a task"
          className="todo-input"
          onKeyDown={this.onKeyDownHandler}
          onChange={this.onChange}
        />
        <ul className="list-reset mt-4 w-full">
          {Object.keys(todos).map(id => (
            <Todo id={id} todo={todos[id]} toggleTodo={this.toggleTodo} />
          ))}
        </ul>
      </main>
    )
  }
}

export default App
