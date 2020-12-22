import React, { useEffect, useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div className="container wrap">
      <h1>FocusScreen</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Su nombre"
        ref={inputRef}
      />
      <button onClick={handleClick} className="btn btn-primary mt-3">
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
