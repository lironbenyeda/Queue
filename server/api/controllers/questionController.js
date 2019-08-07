'use strict';

var mongoose = require('mongoose');
var Question = mongoose.model('Questions');

exports.list_all_questions = function (req, res) {
    var filter = {};
    
    var dateFilter ={"created_date":{}};
    if (req.query.startdate != undefined){
        dateFilter.created_date["$gte"] = new Date(req.query.startdate);
    }
    if(req.query.enddate!= undefined){
        dateFilter.created_date["$lte"] = new Date(req.query.enddate);
    }

    if (Object.entries(dateFilter.created_date).length !== 0){
        filter = dateFilter;
    }

    Question.find(filter, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_question = function (req, res) {
    var new_task = new Question(req.body);
    req.query
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
    Question.findOneAndUpdate({ _id: req.params.questionId }, req.body, { upsert: true, new:true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};