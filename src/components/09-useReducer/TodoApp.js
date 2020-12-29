import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

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
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Ver peliculas</li>
        <li>Ver series</li>
        <li>Comer</li>
      </ul>
    </div>
  )
}
