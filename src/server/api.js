const router = require('express').Router();
const { getSkeletons } = require('./routes');

router.get('/skeletons', getSkeletons);

module.exports = router;
