import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import './TodoApp.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    document.querySelector('input').focus()
  }, [todos])

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  const handleDelete = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId
    })
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toogle',
      payload: todoId
    })
  }

  const handleEdit = (todoId) => {
    dispatch({
      type: 'edit',
      payload: todoId
    })
  }

  const handleUpdate = (data) => {
    dispatch({
      type: 'update',
      payload: data
    })
  }

  return (
    <div className="container wrap">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
