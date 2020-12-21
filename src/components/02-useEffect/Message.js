import React, { useEffect, useState } from 'react'

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords

  useEffect(() => {
    const mouseMove = (e) => {
      const { x, y } = { x: e.x, y: e.y }
      setCoords({ x, y })
    }

    window.addEventListener('mousemove', mouseMove)

    // console.log('Componente Montado')
    return () => {
      console.log('Componente Desmontado')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h1>Parangaricutirimicuaro</h1>
      <p>
        x: {x}, y: {y}
      </p>
    </>
  )
}

export default Message
