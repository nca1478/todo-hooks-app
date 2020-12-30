import React from 'react'

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && 'complete'}`}
      >
        {i + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  )
}
