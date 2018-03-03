const router = require('express').Router();
const db = require('./lib/pg').dbClient;

router.get('/skeletons', (req, res) => {
  const sql = 'select * from skeletons.almanach';
  db.query(sql)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal server error.');
    });
});

module.exports = router;
