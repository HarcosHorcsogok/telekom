import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List"
import Team from "../data/Team.jsx"

const useStyles = makeStyles({
  list: {
    paddingTop: 70,
    paddingBottom: 70
  }
});

export default function TeamList(props)
{
  const classes = useStyles();
  let teams;
  if(!props.teams) teams = [new Team(0, "5G IoT", "6C/2", [], ["IoT"]), new Team(1, "CLANG", "3D/8", [], ["C++"])];
  else teams = props.teams;
  let listItems = [];
  teams.forEach(team => {
    listItems.push(team.toListItem());
  });

  return(
    <List className={classes.list}>
      {listItems}
    </List>
  );
}