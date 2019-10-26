import React, { Component } from "react";

import * as Icons from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'

class TeamListItem extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        name: "5G IoT",
        place: "6C/2",
        url: "https://www.google.com"
      };
    } else {
      this.state = this.props.state;
    }
  }

  render() {
    return (
        <ListItem className="PersonListItem" divider={true}>
          <ListItemText primary={this.state.name} secondary={this.state.place} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => { window.open(this.state.url);}}>
              <Icons.KeyboardArrowRight/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
    );
  }
}

export default TeamListItem;
