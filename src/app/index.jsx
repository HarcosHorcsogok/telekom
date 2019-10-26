import React from "react";
import { render } from "react-dom";

import "../scss/main.scss";
import TopAppBar from "./components/TopAppBar.jsx";


class App extends React.Component {
  render() {
    return (
      <TopAppBar />
    );
  }
}

render(<App />, document.getElementById("app"));
