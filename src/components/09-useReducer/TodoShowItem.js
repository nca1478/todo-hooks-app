import React from 'react'

export const TodoShowItem = ({
  todo,
  index,
  handleDelete,
  handleToggle,
  handleEdit
}) => {
  return (
    <div>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && 'complete'}`}
      >
        {index + 1}. {todo.desc}
      </p>

      <div>
        <button
          onClick={() => handleEdit(todo.id)}
          className="btn btn-warning mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </div>
    </div>
  )
}
