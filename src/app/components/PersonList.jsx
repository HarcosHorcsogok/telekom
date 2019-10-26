import React, { Component } from "react";

import Person from "../data/Person.jsx";
import PersonListItem from "./PersonListItem.jsx";
import List from "@material-ui/core/List"

class PersonList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        people: [new Person(0, "Peter Szecsi", "5G IoT", ["c++"], "https://google.com"),
          new Person(1, "Peter Pecsi", "5G IoT", ["c++"], "https://google.com")],
      };
    } else {
      this.state = this.props.state;
    }

    this.state.listItems = [];
    this.state.people.forEach(person => {
      this.state.listItems.push(person.toListItem());
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

export default PersonList;
