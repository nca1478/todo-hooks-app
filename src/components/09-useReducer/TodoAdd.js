import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import { TodoContext } from './TodoContext'

export const TodoAdd = () => {
  const { dispatch } = useContext(TodoContext)

  const [{ description }, handleInputChange, handleClearForm] = useForm({
    description: ''
  })

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

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
