// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/style.css'

// Components
// import HookApp from './HookApp'
// import CounterApp from './components/01-useState/CounterApp'
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
// import SimpleForm from './components/02-useEffect/SimpleForm'
// import FormWithCustomHook from './components/03-useForm/FormWithCustomHook'
// import MultipleCustomHooks from './components/04-examples/MultipleCustomHooks'
// import FocusScreen from './components/05-useRef/FocusScreen'
// import RealExampleRef from './components/05-useRef/RealExampleRef'
// import Layout from './components/06-useLayoutEffect/Layout'
// import { Memorize } from './components/07-memos/Memorize'
// import { MemoHook } from './components/07-memos/MemoHook'
// import { CallbackHook } from './components/07-memos/CallbackHook'
// import { Padre } from './components/08-tarea-memo/Padre'
// import { MainApp } from './components/10-useContext/MainApp'
import { TodoApp } from './components/09-useReducer/TodoApp'

// Render Method
ReactDOM.render(<TodoApp />, document.getElementById('root'))
