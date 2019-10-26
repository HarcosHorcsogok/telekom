import express from 'express';
import config from '../config.js';
import db from "./db_connector.js"

const router = express.Router();

const db_connector = new db;

router.get('/:skill', function(req, res, next) {
  let skill = req.params.skill;
  console.log(skill);
  // GET/users/ route
  db_connector.query_person_by_skill(skill, val => { res.send(val) });
  // res.send({
  //   name: config.admin.name,
  //   msg: message});
});

export default router;
