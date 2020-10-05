import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Map from './pages/Map/Map'

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
            <Link to='/map'>Map</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/map'>
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
