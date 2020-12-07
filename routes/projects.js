var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/', isLoggedIn, projectsCtrl.index);
router.post('/', isLoggedIn, projectsCtrl.createProject);
router.get('/:id', isLoggedIn, projectsCtrl.show);
router.delete('/:id', isLoggedIn, projectsCtrl.delete);


module.exports = router;