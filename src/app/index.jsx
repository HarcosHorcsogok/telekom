import React from "react";
import { render } from "react-dom";
import "../scss/main.scss";
import TopAppBar from "./components/TopAppBar.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PersonList from "./components/PersonList.jsx"
import TeamList from "./components/TeamList.jsx"
import BottomAppBar from "./components/BottomAppBar.jsx"
import DynamicBreadcrumbs from "./components/Breadcrumbs.jsx"
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import TechnologySkillGrid from "./components/TechnologySkillGrid.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  searched(term) {
    
  }

  render() {
    return (
      <Router>
        <TopAppBar searchCallback={this.searched} />
        <Box p={2} > 
          <DynamicBreadcrumbs />
        </Box>

        <Route path="/(tech|)">
          <TechnologySkillGrid />
        </Route>
        <Route path="/teams" component={TeamList} />
        <Route path="/forum" component={PersonList} />

        <BottomAppBar />
      </Router>
    );
  }
}

render(<App />, document.getElementById("app"));
