import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TechnologySkillCard from "./TechnologySkillCard.jsx";
import Grid from "@material-ui/core/Grid"
import Fade from '@material-ui/core/Fade';

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
  for(let i=0; i<skills.length; i++)
  {
    console.log(skills[i]);
    listItems.push(
      <Fade
        key={skills[i]}
        in={true}
        style={{ transformOrigin: '0 0 0', transitionDelay: i*5 + 'ms' }}>
        <Grid item xs={4} sm={2} md={1} lg={1} > 
          <TechnologySkillCard descObj={{name: skills[i], imglink: "img/" + skills[i].toLowerCase().replace(" ", "") + ".png"}}/>
        </Grid>
      </Fade>);
  }

  return(
    <div className={classes.restrictor} key="gridrestrictor">
      <Grid container spacing={2} key="thegrid">
        {listItems}
      </Grid>
    </div>
  );


}