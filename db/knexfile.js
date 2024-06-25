// knex.js
const knex = require('knex');

const db = knex({
  client: 'mysql',
  connection: {
    host: '208.68.38.173',
    user: 'root',
    password: '20IDEbrasil@20M',
    database: 'genzi'
  }
});

module.exports = db;