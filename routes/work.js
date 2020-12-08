const express = require('express');
const router = express.Router();
const workCtrl = require('../controllers/work');
const isLoggedIn = require('../config/auth');

router.get('/work', isLoggedIn, workCtrl.show);

module.exports = router;