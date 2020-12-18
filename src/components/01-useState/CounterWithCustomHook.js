import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter()
  const factor = 2

  return (
    <div className="container-fluid">
      <h1>Counter: {state}</h1>
      <hr />
      <button onClick={() => increment(factor)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-secondary">
        Reset
      </button>
      <button onClick={() => decrement(factor)} className="btn btn-success">
        -1
      </button>
    </div>
  )
}

export default CounterWithCustomHook
