const sqlite3 = require('sqlite3').verbose();

class db_connector{

  constructor () {
    this.db = new sqlite3.Database('./backend/db/telekom', (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });

    this.result = [];
  }

  query_person_by_skill(skill, cb) {
    let sql = `SELECT 
      person.PERSON_ID id,
      person.NAME name,
      teams.NAME team,
      person.ROLE role
      FROM person inner join skills on person.person_id=skills.person_id inner join teams on person.team_id=teams.team_id where skill=?`;
    
    this.db.all(sql, [skill], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }

  query_persons_by_team(team, cb) {
    let sql = `SELECT 
      person.PERSON_ID id,
      person.NAME name,
      teams.NAME team,
      person.ROLE role
      FROM person inner join teams on person.team_id=teams.team_id where teams.name=?`;
    
    this.db.all(sql, [team], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }

  query_technologies(cb) {
    let sql = `SELECT
      TECHNOLOGY name
      FROM technologies`;
    
    this.db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }

  query_skills(cb) {
    let sql = `SELECT
      SKILL name
      FROM skills`;
    
    this.db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }
}
  
export default db_connector;