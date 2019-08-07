'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.create_a_user = function (req, res) {
    var new_task = new User(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.check_user = function (req, res) {
    User.exists({"username": req.params.username, "password": req.params.password}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
