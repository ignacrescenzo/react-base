import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Users from './pages/Users'

function App () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Test users</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
