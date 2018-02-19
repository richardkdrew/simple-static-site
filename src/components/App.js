import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render () {
    return <Router>
      <Switch>
        <Route exact path='/' render={() => <p>I am simple!</p>} />
      </Switch>
    </Router>
  }
}

export default App
