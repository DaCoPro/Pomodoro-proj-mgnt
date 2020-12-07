const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks');
const isLoggedIn = require('../config/auth');

router.post('/projects/:id/tasks', isLoggedIn, tasksCtrl.create);
router.put('/tasks/:id', isLoggedIn, tasksCtrl.update);

module.exports = router;
