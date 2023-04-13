const express = require('express');

const router = express.Router();

router.use('/mysql',require('./dyzylo'));
router.use('/agiscovnent',require('./agiscovnent'));
module.exports = router;