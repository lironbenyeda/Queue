'use strict';

var mongoose = require('mongoose');
var Question = mongoose.model('Questions');

exports.list_all_questions = function (req, res) {
    Question.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_question = function (req, res) {
    var new_task = new Question(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_question = function (req, res) {
    Question.findById(req.params.questionId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_question = function (req, res) {
    Question.findOneAndUpdate({ _id: req.params.questionId }, req.body, { upsert: true, returnNewDocument:true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};