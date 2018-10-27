import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'

import Todo from './Todo'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState({})

  const addTodo = todo => {
    setInputValue('')
    setTodos({
      ...todos,
      [uuidv4()]: todo
    })
  }

  const toggleTodo = id => {
    const newTodos = { ...todos }
    newTodos[id] = {
      ...todos[id],
      checked: !todos[id].checked
    }
    setTodos(newTodos)
  }

  const onKeyDownHandler = event => {
    if (event.keyCode === 13) {
      addTodo({
        value: inputValue,
        checked: false
      })
    }
  }

  const onChange = event => setInputValue(event.target.value)

  return (
    <main className="app container mx-auto">
      <h1>To Do</h1>
      <input
        value={inputValue}
        placeholder="Add a task"
        className="todo-input"
        onKeyDown={onKeyDownHandler}
        onChange={onChange}
      />
      <ul className="list-reset mt-4 w-full">
        {Object.keys(todos).map(id => (
          <Todo key={id} id={id} todo={todos[id]} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  )
}

export default App
