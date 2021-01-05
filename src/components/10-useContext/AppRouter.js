import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { NavBar } from './NavBar'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { LogoutScreen } from './LogoutScreen'
import { UserContext } from './UserContext'

export const AppRouter = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/logout" component={LogoutScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
