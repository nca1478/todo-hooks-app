import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext)

  const handleClick = () => {
    setUser({
      id: 1234,
      name: 'Luke Skywalker',
      email: 'luke.skywalker@starwars.com'
    })
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button onClick={handleClick} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}
