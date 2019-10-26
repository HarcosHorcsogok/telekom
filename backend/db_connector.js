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
      FROM person inner join skills on person.person_id=skills.person_id inner join teams on person.team_id=teams.team_id 
      where LOWER( skill ) LIKE "%${skill.toLowerCase()}%"`;
    
    this.db.all(sql, [], (err, rows) => {
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
      FROM person inner join teams on person.team_id=teams.team_id where LOWER( teams.name ) LIKE "${team.toLowerCase()}"`;
    
    this.db.all(sql, [], (err, rows) => {
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

  query_members(team_name, cb) {
    let sql = `SELECT
      person.NAME name
      FROM person inner join teams on person.team_id=teams.team_id WHERE LOWER( teams.NAME ) LIKE "${team_name.toLowerCase()}"`;
    
    this.db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }

  query_teams_by_technology(technology, cb) {let sql = `SELECT 
    teams.team_id id,
    teams.name name,
    teams.place place,
    technologies.technology skill
    FROM teams inner join technologies on technologies.team_id=teams.team_id where LOWER (technology ) LIKE "${technology.toLowerCase()}"`;

    this.db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    });
  }
}
  
export default db_connector;