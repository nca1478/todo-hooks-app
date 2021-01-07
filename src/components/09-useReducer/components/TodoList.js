import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoListItem } from './TodoListItem'

export const TodoList = () => {
  const { todos } = useContext(TodoContext)

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  )
}
