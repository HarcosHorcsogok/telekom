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
import Favicon from 'react-favicon';

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░
// ░░░░░░░░▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░
// ░░░░░░░░█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░
// ░░░░░░░░█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░
// ░▄▄▄▄▄░░█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░
// ░██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░
// ░░▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░
// ░░░░▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░
// ░░░░░░░▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░
// ░░░░░░░▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░
// ░░░░░░█▀▀█████████▀▀▀▀████████████▀░░░░
// ░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

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

  componentDidMount() {
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
    //let path = window.location.pathname.split("/");
    //console.log(path);
    return (
      <Router>
        <Route exact path="/(skills|)" >
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar searchCallback={(term) => { this.searchedSkill(term); }} search="true" title={0} />
          <TechnologySkillGrid technologies={this.state.skills}/>
        </Route>
        <Route exact path="/(skills|)/:skillName" >          
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar searchCallback={(term) => { this.searchedSkill(term); }} back={true} title={1}/>
          <PersonList />
        </Route>
        <Route exact path="/teams">
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar searchCallback={(term) => { this.searchedTechnology(term); }} search="true" title={0} />
          <TechnologySkillGrid technologies={this.state.technologies}/>
        </Route>
        <Route exact path="/teams/:techName">
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar searchCallback={(term) => { this.searchedTechnology(term); }} back={true} title={1}/>
          <TeamList />
        </Route>
        <Route exact path="/teams/:techName/:teamName">
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar searchCallback={(term) => { this.searchedTechnology(term); }} back={true} title={2}/>
          <TeamPersonList />
        </Route>
        <Route path="/forum" title={0}>
          <Favicon url="/img/telekom.jpg" />
          <TopAppBar />
          <PersonList />
        </Route>

        <BottomAppBar callback={()=>{this.searchedSkill(""); this.searchedTechnology("");}}/>
      </Router>
    );
  }
}

render(<App />, document.getElementById("app"));
