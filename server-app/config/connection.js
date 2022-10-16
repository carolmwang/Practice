const pgp = require('pg-promise')();

// Name of Database
const dbConfig = process.env.DATABASE_URL (( {
  database: 'information_db'
}))

// Establish connection to DB with pg-promise
const db = pgp(dbConfig);

module.exports = {
  pgp,
  db
};