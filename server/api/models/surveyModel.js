'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SurveySchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the text of the survey'
      },
      created_date: {
        type: Date,
        default: Date.now
      },
      sumRank:{
        type: Number,
        default: 0
      },
      answers:[{ text: String, rank:Number}]
});

module.exports = mongoose.model('Surveys', SurveySchema);