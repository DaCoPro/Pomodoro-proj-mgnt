var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);

module.exports = router;