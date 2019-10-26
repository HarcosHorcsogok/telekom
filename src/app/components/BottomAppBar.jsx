import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TechIcon from '@material-ui/icons/Widgets';
import TeamIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';


class BottomAppBar extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        value: "technologies",
      };
    } else {
      this.state = this.props.state;
    }
  }
  componentWillMount() { }

  render() {
    return (
    <BottomNavigation value={this.state.value} showLabels
	                  onChange={(event, newValue) => {this.setState({value: newValue})}}>
      <BottomNavigationAction label="Technologies" value="technologies" icon={<TechIcon />} />
      <BottomNavigationAction label="Teams" value="teams" icon={<TeamIcon />} />
      <BottomNavigationAction label="Forum" value="forum" icon={<ForumIcon />} />
    </BottomNavigation>
    );
  }
}

export default BottomAppBar;

