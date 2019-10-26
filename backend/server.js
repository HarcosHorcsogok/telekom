import express from 'express';
import config from '../config.js';
import db from "./db_connector.js"
import Person from '../src/app/data/Person.jsx';

// function to_person(db_row) {
//   return new Person();
// }

const router = express.Router();

const db_connector = new db;

router.get('/skills/:skill', function(req, res, next) {
  let skill = req.params.skill;
  db_connector.query_person_by_skill(skill, val => { console.log(res); res.send(val) });
});

// team -> [person]
// technology -> [team]

// router.get('/skills/:skill', function(req, res, next) {
//   let skill = req.params.skill;
//   console.log(skill);
//   db_connector.query_person_by_skill(skill, val => { res.send(val) });
// });

export default router;
