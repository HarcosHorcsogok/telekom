import React from "react";
import { render } from "react-dom";

import "../scss/main.scss";

import Person from "./components/Person.jsx";
import TechnologySkill from "./components/TechnologySkill.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <Person />
        <TechnologySkill state={{name: "Kotlin", imglink: "kotlin.png"}}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
