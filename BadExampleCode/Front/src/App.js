import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import ShiftGetter from './components/ShiftGetter'
import Coder from './components/Coder'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path="/code/:shift"
              render={ ({ match }) => (
                <Coder shift = { parseInt(match.params.shift) } />
              )}
            />
          <Route
              path="/start"
              render={ match => 
                <ShiftGetter onSubmit = {
                  shift => {
                    match.history.push("/code/" + shift)
                  }} />
                }
            />
            <Route
              render={() => <Redirect to="/start" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;