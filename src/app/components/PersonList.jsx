import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Person from "../data/Person.jsx";
import PersonListItem from "./PersonListItem.jsx";
import List from "@material-ui/core/List"

const useStyles = makeStyles({
  list: {
    paddingTop: 70,
    paddingBottom: 70
  }
});

export default function PersonList(props)
{
  const classes = useStyles();
  let people;
  if(!props.people) people = [new Person(0, "Peter Szecsi", "manager", "5G IoT"), new Person(1, "Peter Pecsi", "senior developer", "5G IoT")];
  else people = props.people;
  let listItems = [];
  people.forEach(person => {
    listItems.push(person.toListItem())
  });

  return(
    <List key={"aaa"} className={classes.list}>
      {listItems}
    </List>
  );
}
