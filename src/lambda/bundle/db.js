const KnexConstructor = require('knex');

const knex = KnexConstructor({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, // utf8_unicode_ci
  },
});

knex.on('query', (queryData) => {
  console.log('[DB] ' + queryData);
});

module.exports = knex;
