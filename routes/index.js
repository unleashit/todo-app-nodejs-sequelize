var models  = require('../models');
var express = require('express');
var router  = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Todo MVC',
      users: users
    });
  });
});

module.exports = router;