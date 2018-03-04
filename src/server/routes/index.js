const db = require('../lib/pg');

function getSkeletons(req, res) {
  const sql = 'select * from skeletons.almanach';
  db.query(sql)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal server error.');
    });
}

module.exports = { getSkeletons };
