import React, { useEffect, useState } from 'react'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })
  const { name, email } = formState

  useEffect(() => {
    console.log('Hey!!!')
  }, [])

  useEffect(() => {
    console.log('formState')
  }, [formState])

  useEffect(() => {
    console.log('name')
  }, [name])

  useEffect(() => {
    console.log('email')
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <div className="container">
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="name@server.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default SimpleForm
