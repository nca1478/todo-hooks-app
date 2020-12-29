import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './TodoApp.css'

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }
]

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)
  console.log(todos)

  return (
    <div className="container wrap">
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description..."
              autoComplete="off"
            />
            <button className="btn btn-outline-primary btn-block mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
