const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/', controller.index);

// test
router.get('/teamgames', controller.getTeamGames);

module.exports = router;
