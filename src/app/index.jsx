import React from "react";
import { render } from "react-dom";

import "../scss/main.scss";
import TopAppBar from "./components/TopAppBar.jsx";
import PersonList from "./components/PersonList.jsx"


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopAppBar />
        <PersonList />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
