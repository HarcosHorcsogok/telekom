import React, { Component } from "react";

import PersonListItem from "./PersonListItem.jsx";
import List from "@material-ui/core/List"

class PersonList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        listItems: [<PersonListItem state={{name: "Peter Szecsi", team: "5G IoT", imgUrl: "szepet.jpg", chatUrl: "https://google.com"}} key={"a"}/>,
         <PersonListItem state={{name: "Szeter Pecsi", team: "5G IoT", imgUrl: "szepet.jpg", chatUrl: "https://google.com"}} key={"b"}/>, 
         <PersonListItem state={{name: "Szecsi Peter", team: "5G IoT", imgUrl: "szepet.jpg", chatUrl: "https://google.com"}} key={"c"}/>],
      };
    } else {
      this.state = this.props.state;
    }
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
