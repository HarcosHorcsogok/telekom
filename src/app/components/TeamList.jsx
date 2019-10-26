import React, { Component } from "react";

import TeamListItem from "./TeamListItem.jsx";
import List from "@material-ui/core/List"

class TeamList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {      
      this.state = {
        listItems: 
        [<TeamListItem state={{name: "5G IoT", place: "6C/2", url: "https://google.com"}} key={"a"}/>,
          <TeamListItem state={{name: "5G Phone Hardware", place: "4A/5", url: "https://google.com"}} key={"b"}/>,
          <TeamListItem state={{name: "5G Towers", place: "8F/11", url: "https://google.com"}} key={"c"}/>]
      };
    } else {
      this.state = this.props.state;
    }
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
