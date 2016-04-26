var express = require('express');
var models  = require('../models/index');
var validator = require('validator');

exports.createTask = function (req, res) {
    if (req.body.title.trim()) {
        models.Task.create({
            title: validator.escape(req.body.title),
            UserId: req.params.userid
        }).then(function() {
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
};

exports.deleteTask = function(req, res) {
    models.Task.destroy({
        where: {
            id: req.params.taskid
        }
    }).then(function(success, err) {
        if (err) console.log(err);
        res.redirect('/');
    });
};
