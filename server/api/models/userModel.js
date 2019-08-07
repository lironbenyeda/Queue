'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: {
        type: String,
        required: 'Kindly enter the username'
      },
      password: {
        type: String,
        default: 'Kindly enter the password'
      }
});

module.exports = mongoose.model('Users', UserSchema);