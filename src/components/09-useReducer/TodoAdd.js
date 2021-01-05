import React from 'react'
import useForm from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, handleClearForm] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      document.querySelector('input').focus()
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
      isEdit: false
    }

    handleAddTodo(newTodo)
    handleClearForm()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Description..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-1"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
