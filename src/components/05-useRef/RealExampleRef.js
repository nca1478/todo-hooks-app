import React, { useState } from 'react'
import MultipleCustomHooks from '../04-examples/MultipleCustomHooks'

const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="container wrap">
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="btn btn-info mt-2" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  )
}

export default RealExampleRef
