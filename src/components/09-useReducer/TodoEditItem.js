import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { handleUpdate } from './todoAction'
import { TodoContext } from './TodoContext'

export const TodoEditItem = ({ todo }) => {
  const [{ description }, handleInputChange] = useForm({
    description: todo.desc
  })
  const { dispatch } = useContext(TodoContext)
  const data = {
    id: todo.id,
    desc: description
  }

  return (
    <div>
      <input
        className="form-control mr-2"
        type="text"
        name="description"
        autoComplete="off"
        value={description}
        onChange={handleInputChange}
      />
      <button
        onClick={() => handleUpdate(data, dispatch)}
        className="btn btn-info"
      >
        Guardar
      </button>
    </div>
  )
}
