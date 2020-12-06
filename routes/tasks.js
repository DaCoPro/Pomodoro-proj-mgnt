const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');

router.post('/projects/:id/tasks', tasksCtrl.create);

module.exports = router;
