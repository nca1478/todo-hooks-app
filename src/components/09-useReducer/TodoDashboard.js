import React, { useContext } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { TodoContext } from './TodoContext'
import './TodoApp.css'

export const TodoDashboard = () => {
  const { todos } = useContext(TodoContext)

  return (
    <div className="container wrap">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList />
        </div>
        <div className="col-5">
          <TodoAdd />
        </div>
      </div>
    </div>
  )
}
