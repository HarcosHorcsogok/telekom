import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
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
  let skills;
  if(!props.skills) skills = ["C++", "Java", "Kotlin", "AI", "Cloud", "Javascript", "Big Data", "Serverless", "Machine Learning", "Hardware", "Windows", "Linux", "React", "Angular"];
  else skills = props.skills;

  let listItems = [];
  skills.forEach(skill => {
    listItems.push(<Grid item xs={4} sm={2} md={1} lg={1} key={skill}> <TechnologySkillCard descObj={{name: skill, imglink: "img/" + skill.toLowerCase().replace(" ", "") + ".png"}}/></Grid>);
  });

  return(
    <div className={classes.restrictor} key="gridrestrictor">
      <Grid container spacing={2} key="thegrid">
        {listItems}
      </Grid>
    </div>
  );


}