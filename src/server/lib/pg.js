const pg = require('pg');

pg.types.setTypeParser(1114, stringValue => new Date(`${stringValue}+0000`));

function setupDatabaseConnection(config) {
  const pool = new pg.Pool(config);
  pool.on('error', (err) => {
    console.error('idle client error', err.message, err.stack);
    throw Error(err);
  });

  return {
    query: (sql) => {
      const callerStackTrace = new Error().stack;
      return pool.query(sql)
        .catch((err) => {
          err.stack = callerStackTrace.replace('Error', `Error: ${err.message}`);
          throw err;
        });
    },
    close: () => pool.end(),
  };
}

const {
  PGUSER, PGDATABASE, PGPASSWORD, PGHOST,
} = process.env;

const config = {
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: '5432',
  max: 20,
  idleTimeoutMillis: 1000,
};

const dbClient = setupDatabaseConnection(config);

module.exports = dbClient;
