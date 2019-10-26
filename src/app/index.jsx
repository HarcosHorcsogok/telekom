import React from "react";
import { render } from "react-dom";
import "../scss/main.scss";
import TopAppBar from "./components/TopAppBar.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BottomAppBar from "./components/BottomAppBar.jsx"
import TechnologySkillGrid from "./components/TechnologySkillGrid.jsx";
import PersonList from "./components/PersonList.jsx";
import TeamList from "./components/TeamList.jsx";
import TeamPersonList from "./components/TeamPersonList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: [],
      skills: []
    };
    this.searchedTechnology = this.searchedTechnology.bind(this);
    this.searchedSkill = this.searchedSkill.bind(this);
  }

  searchedTechnology(term) {
    fetch("/api/technologies")
      .then(result => result.json())
      .then(allTechnologies => {
        const filteredTechnologies = allTechnologies.filter(t => t.toLowerCase().indexOf(term.toLowerCase()) >= 0);

        this.setState({
          technologies: filteredTechnologies
        });
      });
  }

  searchedSkill(term) {
    fetch("/api/skills")
      .then(result => result.json())
      .then(allSkills => {
        const filteredSkilss = allSkills.filter(t => t.toLowerCase().indexOf(term.toLowerCase()) >= 0);

        this.setState({
          skills: filteredSkilss
        });
      });
  }

  componentWillMount() {
    fetch("/api/technologies")
      .then(result => result.json())
      .then(allTechnologies => {
        this.setState({
          technologies: allTechnologies
        });
      });

    fetch("/api/skills")
      .then(result => result.json())
      .then(allSkills => {
        this.setState({
          skills: allSkills
        });
      });
  }

  render() {
    return (
      <Router>
        <TopAppBar searchCallback={(term) => {
          this.searchedSkill(term);
          this.searchedTechnology(term);
        }} />

        <Route exact path="/(tech|)">
          <TechnologySkillGrid technologies={this.state.technologies}/>
        </Route>
        <Route exact path="/(tech|)/:techName">
          <TeamList />
        </Route>
        <Route exact path="/(tech|)/:techName/:teamName">
          <TeamPersonList />
        </Route>
        <Route exact path="/skills" >
          <TechnologySkillGrid technologies={this.state.skills}/>
        </Route>
        <Route exact path="/skills/:skillName" >
          <PersonList />
        </Route>
        <Route path="/forum" component={PersonList} />

        <BottomAppBar />
      </Router>
    );
  }
}

render(<App />, document.getElementById("app"));
