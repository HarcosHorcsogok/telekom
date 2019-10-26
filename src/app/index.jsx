import React from "react";
import { render } from "react-dom";

import "../scss/main.scss";

import Person from "./components/Person.jsx";
import TechnologySkill from "./components/TechnologySkill.jsx";
import PersonList from "./components/PersonList.jsx";
import TeamList from "./components/TeamList.jsx"

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <TechnologySkill state={{name: "Kotlin", imglink: "kotlin.png"}}/>
        <PersonList />
        <TeamList />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
