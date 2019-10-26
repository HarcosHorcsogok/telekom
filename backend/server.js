import express from 'express';
import config from '../config.js';
import message from "./db_connector.js"

const router = express.Router();

router.get('/', function(req, res, next) {
  // GET/users/ route
  res.send({
    name: config.admin.name,
    msg: message});
});

export default router;
