import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Person from "../data/Person.jsx";
import List from "@material-ui/core/List"

export default class PersonList extends React.Component
{
  constructor(props) {
    super(props);
    this.classes = null;
    if(!props.people) this.state = {people: []};
    else this.state = {people: props.people};
  }

  componentDidMount() {
    let path = window.location.pathname.split('/').filter(x => x);
    fetch("/api/teams/" + path[path.length - 1])
      .then(result => result.json())
      .then(response => {
        let people = [];
        response.forEach(p => {
          people.push(new Person(p.id, p.name, p.role, p.team));
        });
        this.setState({people: people});
      });
  }

  render() {
    let listItems = [];
    this.state.people.forEach(person => {
      listItems.push(person.toListItemTeam());
    });

    const style ={
      paddingTop: 70,
      paddingBottom: 70
    };
    return (
      <List style={style}>
        {listItems}
      </List>
    );
  }
}
