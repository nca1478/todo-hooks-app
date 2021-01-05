import React from 'react'
import { TodoEditItem } from './TodoEditItem'
import { TodoShowItem } from './TodoShowItem'

export const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleToggle,
  handleEdit,
  handleUpdate
}) => {
  return (
    <li className="list-group-item" key={todo.id}>
      {todo.isEdit ? (
        <TodoEditItem
          todo={todo}
          index={index}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
        />
      ) : (
        <TodoShowItem
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
        />
      )}
    </li>
  )
}
