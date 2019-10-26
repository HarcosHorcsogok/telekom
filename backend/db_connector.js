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

  async query_person_by_skill(skill, cb) {
    let sql = `SELECT 
      person.PERSON_ID id,
      person.NAME name,
      teams.NAME team,
      person.ROLE role       
      FROM person inner join skills on person.person_id=skills.person_id inner join teams on person.team_id=teams.team_id where skill=?`;
    
      let sql_skills = `SELECT * FROM skills where skill=?`;
    let sql1 = `SELECT DISTINCT Name name FROM person where role="manager"`;
    
    this.db.all(sql, [skill], (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);

      console.log(rows);
      // rows.forEach((row) => {
      //   result.push(row);
      // });
      // return result;
    });

  }
}
  
export default db_connector;