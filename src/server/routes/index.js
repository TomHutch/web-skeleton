const db = require('../lib/pg');
const logger = require('../lib/logger');

function getSkeletons(req, res) {
  const sql = 'select * from skeletons.almanach';
  db.query(sql)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      logger.error(err, { sql, stack: err.stack });
      res.status(500).send('Internal server error.');
    });
}

module.exports = { getSkeletons };
