import React from 'react'
import useForm from '../../hooks/useForm'

const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleClearForm] = useForm({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    handleClearForm()
  }

  return (
    <div className="container">
      <h1>FormWithCustomHook</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@server.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default FormWithCustomHook
