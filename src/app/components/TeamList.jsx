import React, { Component } from "react";

import TeamListItem from "./TeamListItem.jsx";
import List from "@material-ui/core/List"
import Team from "../data/Team.jsx"

class TeamList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {      
      this.state = {
        teams: [
          new Team(0, "5G IoT", "6C/2", [], ["IoT"]),
          new Team(1, "CLANG", "3D/8", [], ["C++"])
        ],
      };

    } else {
      this.state = this.props.state;
    }

    this.state.listItems = [];
    this.state.teams.forEach(team => {
      this.state.listItems.push(team.toListItem());
    });
  }

  render() {
    return (
      <List key={"bbb"}>
        {this.state.listItems}
      </List>
    );
  }
}

export default TeamList;
