import express from 'express';
import config from '../config.js';
import db from "./db_connector.js"

// function to_person(db_row) {
//   return new Person();
// }

const router = express.Router();

const db_connector = new db;

// Get people with certain skills
router.get('/skills/:skill', function(req, res, next) {
  let skill = req.params.skill;
  db_connector.query_person_by_skill(skill, val => { res.send( val ) });
});

// Get people in ceertain team
router.get('/teams/:team', function(req, res, next) {
  let team = req.params.team;
  db_connector.query_persons_by_team(team, val => { res.send(val) });
});

// Get all technologies
router.get('/technologies', function(req, res, next) {
  db_connector.query_technologies(val => { 
    let techs = [];
    val.forEach(element => {
      techs.push(element.name)
    });
    res.send(techs) 
  });
});

// Get all skills
router.get('/skills', function(req, res, next) {
  db_connector.query_skills(val => { 
    let skills = [];
    val.forEach(element => {
      skills.push(element.name)
    });
    res.send(skills) 
  });
});

// Get the name of all members of a team as an array
router.get('/members/:team_name', function(req, res, next) {
  const team_name = req.params.team_name;
  db_connector.query_members(team_name, val => { 
    let members = [];
    val.forEach(element => {
      members.push(element.name)
    });
    res.send(members) 
  });
});

// Get teaams with certain technologies
router.get('/technologies/:technology', function(req, res, next) {
  const technology = req.params.technology;
  db_connector.query_teams_by_technology(technology, val => { 
    res.send(val) 
  });
});

export default router;
