import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a general :(')

  return (
    <button
      className="btn btn-outline-primary"
      onClick={() => {
        increment(5)
      }}
    >
      Incrementar
    </button>
  )
})
