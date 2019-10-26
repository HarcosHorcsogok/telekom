import express from 'express';
import config from '../config.js';
import db from "./db_connector.js"

// function to_person(db_row) {
//   return new Person();
// }

const router = express.Router();

const db_connector = new db;

router.get('/skills/:skill', function(req, res, next) {
  let skill = req.params.skill;
  db_connector.query_person_by_skill(skill, val => { res.send( val ) });
});

router.get('/teams/:team', function(req, res, next) {
  let team = req.params.team;
  console.log(team);
  db_connector.query_persons_by_team(team, val => { console.log(val); res.send(val) });
});

router.get('/technologies', function(req, res, next) {
  db_connector.query_technologies(val => { 
    let techs = [];
    val.forEach(element => {
      techs.push(element.name)
    });
    console.log(techs); 
    res.send(techs) 
  });
});

router.get('/skills', function(req, res, next) {
  db_connector.query_skills(val => { 
    let skills = [];
    val.forEach(element => {
      skills.push(element.name)
    });
    console.log(skills); 
    res.send(skills) 
  });
});

  // technology -> [team]
export default router;
