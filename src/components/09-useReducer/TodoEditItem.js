import React from 'react'
import useForm from '../../hooks/useForm'

export const TodoEditItem = ({ todo, handleUpdate }) => {
  const handleClick = () => {
    handleUpdate({
      id: todo.id,
      desc: description
    })
  }
  const [{ description }, handleInputChange] = useForm({
    description: todo.desc
  })

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
      <button onClick={handleClick} className="btn btn-info">
        Guardar
      </button>
    </div>
  )
}
