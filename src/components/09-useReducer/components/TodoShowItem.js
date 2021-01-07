import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { handleToggle, handleEdit, handleDelete } from '../actions/todoAction'

export const TodoShowItem = ({ todo: { id, desc, done }, index }) => {
  const { dispatch } = useContext(TodoContext)

  return (
    <div>
      <p
        onClick={() => handleToggle(id, dispatch)}
        className={`${done && 'complete'}`}
      >
        {index + 1}. {desc}
      </p>

      <div>
        <button
          onClick={() => handleEdit(id, dispatch)}
          className="btn btn-warning mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(id, dispatch)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </div>
    </div>
  )
}
