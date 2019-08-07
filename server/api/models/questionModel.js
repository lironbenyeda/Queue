'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  text: {
    type: String,
    required: 'Kindly enter the text of the question'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  rank: {
    type: Number,
    default: 0
  },
  isAnswered:{
    type: Boolean,
    default: false
  },
  answers:[{ text: String, date: Date, user: String}]
});

module.exports = mongoose.model('Questions', QuestionSchema);