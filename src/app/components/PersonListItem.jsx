import React, { Component } from "react";

import * as Icons from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'

class PersonListItem extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        name: "Peter Szecsi",
        team: "5G IoT",
        imgUrl: "szepet.jpg",
        chatUrl: "www.google.com"
      };
    } else {
      this.state = this.props.state;
    }
  }

  render() {
    return (
      <ListItem className="PersonListItem" key={this.state.name + this.state.team}>
        <ListItemAvatar>
          <Avatar src={""+ this.state.imgUrl}/>
        </ListItemAvatar>
        <ListItemText primary={this.state.name} secondary={this.state.team} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => { window.open(this.state.chatUrl);}}>
            <Icons.ChatBubble/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default PersonListItem;
