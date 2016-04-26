var express = require('express');
var validator = require('validator');
var router = express.Router();

var users = require('../controllers/users');
var tasks = require('../controllers/tasks');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', users.createUser);

router.get('/:userid/destroy', users.deleteUser);

router.post('/:userid/tasks/create', tasks.createTask);

router.get('/:userid/tasks/:taskid/destroy', tasks.deleteTask);

module.exports = router;
