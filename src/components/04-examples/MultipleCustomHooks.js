import React from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1)
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  )
  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
    </div>
  )
}

export default MultipleCustomHooks
