import React from 'react'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
  console.log(state)

  return (
    <div className="container">
      <h1>Custom Hooks!!!</h1>
    </div>
  )
}

export default MultipleCustomHooks
