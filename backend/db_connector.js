const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./backend/db/telekom', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

let sql = `SELECT DISTINCT Name name FROM person where role="manager"`;
let sql1 = `SELECT DISTINCT Name name FROM person where role="manager"`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

const msg = "asdasd"

export default { msg };