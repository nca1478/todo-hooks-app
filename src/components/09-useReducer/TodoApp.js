import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './TodoApp.css'
import useForm from '../../hooks/useForm'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  const [{ description }, handleInputChange, handleClearForm] = useForm({
    description: ''
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    handleClearForm()

    document.querySelector('input').focus()
  }

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action)
  }

  const handleToogle = (todoId) => {
    dispatch({
      type: 'toogle',
      payload: todoId
    })
  }

  return (
    <div className="container wrap">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p
                  onClick={() => handleToogle(todo.id)}
                  className={`${todo.done && 'complete'}`}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </div>
  )
}
