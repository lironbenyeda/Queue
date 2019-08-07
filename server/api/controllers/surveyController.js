'use strict';

var mongoose = require('mongoose');
var Survey = mongoose.model('Surveys');

exports.list_all_surveys = function (req, res) {
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

    Survey.find(filter, function (err, task) {
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
    var sumRank =0;
    for(var i = 0; i < req.body.answers.length;i++){
        sumRank += req.body.answers[i].rank;
    }

    req.body.sumRank = sumRank;
    
    Survey.findOneAndUpdate({ _id: req.params.surveyId }, req.body, { upsert: true, new:true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};