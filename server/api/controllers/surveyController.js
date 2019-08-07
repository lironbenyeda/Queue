'use strict';

var mongoose = require('mongoose');
var Survey = mongoose.model('Surveys');

exports.list_all_surveys = function (req, res) {
    Survey.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_survey = function (req, res) {
    var new_task = new Survey(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_survey = function (req, res) {
    Survey.findById(req.params.surveyId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_survey = function (req, res) {
    Survey.findOneAndUpdate({ _id: req.params.surveyId }, req.body, { upsert: true, returnNewDocument:true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};