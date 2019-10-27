import React from "react";
import List from "@material-ui/core/List"
import Team from "../data/Team.jsx"
import { Link } from 'react-router-dom';

export default class TeamList extends React.Component
{
  constructor(props) {
    super(props);
    this.classes = null;
    if(!props.teams) this.state = {people: []};
    else this.state = {people: props.teams};
  }

  componentDidMount() {
    let path = window.location.pathname.split('/').filter(x => x);
    fetch("/api/technologies/" + path[path.length - 1])
      .then(result => result.json())
      .then(response => {
        let people = [];
        response.forEach(p => {
          people.push(new Team(p.id, p.name, p.place));
        });
        this.setState({people: people});
      });
  }

  render() {
    let listItems = [];
    this.state.people.forEach(person => {
      listItems.push(person.toListItem())
    });

    const style ={
      paddingTop: 65,
      paddingBottom: 65
    };
    return (
      <List style={style}>
        {listItems}
      </List>
    );
  }
}
