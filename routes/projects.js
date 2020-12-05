var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/new', projectsCtrl.new);
router.get('/', projectsCtrl.index);
router.post('/', projectsCtrl.createProject);
router.get('/:id', projectsCtrl.show);


module.exports = router;