var express = require('express');
var models  = require('../models');
var validator = require('validator');

var usernamePattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-';

exports.createUser = function(req, res) {
    if (validator.isWhitelisted(req.body.username, usernamePattern) && req.body.username.trim()) {
        models.User.create({
            username: validator.escape(req.body.username)
        })
        .then(function () {
            res.redirect('/');
        });

    } else {
        res.redirect('/');
    }
};

exports.deleteUser = function(req, res) {
    models.User.destroy({
        where: {
            id: req.params.userid
        }
    }).then(function() {
        res.redirect('/');
    });
};





