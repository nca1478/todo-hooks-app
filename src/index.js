// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Components
// import HookApp from './HookApp'
// import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/style.css'

// Render Method
ReactDOM.render(<CounterWithCustomHook />, document.getElementById('root'))
