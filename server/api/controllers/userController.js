'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');


exports.create_a_user = function (req, res) {
    var new_task = new Survey(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
