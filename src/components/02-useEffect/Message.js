import React, { useEffect } from 'react'

const Message = () => {
  useEffect(() => {
    console.log('Componente Montado')
    return () => {
      console.log('Componente Desmontado')
    }
  }, [])

  return (
    <>
      <h1>Parangaricutirimicuaro</h1>
    </>
  )
}

export default Message
