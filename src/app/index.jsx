import React from "react";
import { render } from "react-dom";

import "../scss/main.scss";
import TopAppBar from "./components/TopAppBar.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PersonList from "./components/PersonList.jsx"
import TeamList from "./components/TeamList.jsx"
import BottomAppBar from "./components/BottomAppBar.jsx"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/(tech|)" component={PersonList} />
        <Route path="/teams" component={TeamList} />
        <Route path="/forum" component={PersonList} />

        <BottomAppBar />
      </Router>
    );
  }
}

render(<TopAppBar />, document.getElementById("top"));
render(<App />, document.getElementById("app"));
