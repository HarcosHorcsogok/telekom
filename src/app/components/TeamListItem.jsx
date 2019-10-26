import React, { Component } from "react";

import * as Icons from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom';

class TeamListItem extends Component {
  constructor(props) {
    super(props);
    if (!props.state) {
      this.state = {
        name: "5G IoT",
        place: "6C/2"
      };
    } else {
      this.state = props.state;
    }
  }

  render() {
    return (
      <Link to={window.location.pathname + "/" + this.state.name}>
        <ListItem className="PersonListItem" divider={true}>
          <ListItemText primary={this.state.name} secondary={this.state.place} />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <Icons.KeyboardArrowRight/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
    );
  }
}

export default TeamListItem;
