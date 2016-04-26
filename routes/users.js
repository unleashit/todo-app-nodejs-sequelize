var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res) {
  if ((req.body.username).trim()) {
    models.User.create({
      username: req.body.username
    }).then(function () {
      res.redirect('/');
    });

    } else {
      res.redirect('/');
  }
});

router.get('/:userid/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.userid
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:userid/tasks/create', function(req, res) {
  if ((req.body.title).trim()) {
    models.Task.create({
        title: req.body.title,
        UserId: req.params.userid
    }).then(function() {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

router.get('/:userid/tasks/:taskid/destroy', function(req, res) {
  models.Task.destroy({
    where: {
      id: req.params.taskid
    }
  }).then(function(success, err) {
    if (err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;
