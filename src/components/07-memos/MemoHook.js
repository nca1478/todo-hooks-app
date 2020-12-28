import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import useCounter from '../../hooks/useCounter'

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(100)
  const [show, setShow] = useState(true)
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div className="container wrap">
      <h1>MemoHook</h1>
      <hr />

      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-2"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
