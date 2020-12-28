import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './Layout.css'

const Layout = () => {
  const pTag = useRef()
  const { state, increment } = useCounter(1)
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  )
  const { quote } = !!data && data[0]
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div className="container">
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className="btn btn-primary">
        Next
      </button>
    </div>
  )
}

export default Layout
