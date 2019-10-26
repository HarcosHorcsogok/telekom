import React, { Component } from "react";

import Person from "../data/Person.jsx";
import List from "@material-ui/core/List"

class TeamPersonList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        people: [new Person(0, "Peter Szecsi", "manager", "5G IoT"),
          new Person(1, "Peter Pecsi", "senior developer", "5G IoT")],
      };
    } else {
      this.state = this.props.state;
    }

    this.state.listItems = [];
    this.state.people.forEach(person => {
      this.state.listItems.push(person.toListItemTeam());
    });
  }

  render() {
    return (
      <List key={"aaa"}>
        {this.state.listItems}
      </List>
    );
  }
}

export default TeamPersonList;
