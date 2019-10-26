import React, { Component } from "react";
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';

import TechnologySkillCard from "./TechnologySkillCard.jsx";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  restrictor: {
    overflow: "hidden",
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default function TechnologySkillGrid(props){
  const classes = useStyles();
  let skills = props.technologies;

  let listItems = [];
  skills.forEach(skill => {
    listItems.push(<Grid item xs={4}> <TechnologySkillCard descObj={{name: skill, imglink: "img/" + skill.toLowerCase().replace(" ", "_") + ".png"}} /></Grid>);
  });

  return(
    <div className={classes.restrictor}>
      <Grid container spacing={3}>
        {listItems}
      </Grid>
    </div>
  );


}