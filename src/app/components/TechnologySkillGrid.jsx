import React, { Component } from "react";
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';

import TechnologySkillCard from "./TechnologySkillCard.jsx";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  restrictor: {
    overflow: "hidden",
    paddingTop: 70,
    paddingBottom: 70,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default function TechnologySkillGrid(props){
  const classes = useStyles();
  let skills = props.technologies;

  let listItems = [];
  skills.forEach(skill => {
    listItems.push(<Grid item xs={4}> <TechnologySkillCard descObj={{name: skill, imglink: "img/" + skill.toLowerCase().replace(" ", "") + ".png"}} /></Grid>);
  });

  return(
    <div className={classes.restrictor}>
      <Grid container spacing={2}>
        {listItems}
      </Grid>
    </div>
  );


}