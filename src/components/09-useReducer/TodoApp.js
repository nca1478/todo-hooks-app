import React, { useEffect, useReducer } from 'react'
import { TodoDashboard } from './components/TodoDashboard'
import { todoReducer } from './reducers/todoReducer'
import { TodoContext } from './context/TodoContext'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    document.querySelector('input').focus()
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoDashboard />
    </TodoContext.Provider>
  )
}
