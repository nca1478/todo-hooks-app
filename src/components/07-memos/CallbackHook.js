import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(1)

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num)
    },
    [setCounter]
  )

  return (
    <div className="container wrap">
      <h1>useCallback Hook</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <ShowIncrement increment={increment} />
    </div>
  )
}
