'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var worker = new Schema({
//     'first name': String,
//     'last name': String,
//     'Email address': String,
//     'Jobtype': String,
//     'Salary': String,
//     'Phone Number': String,
//     'workdateend': String,
//     'workdatestart': String,
//     'preferredJobType': String
// });

var worker = new Schema({
    data: String
});

module.exports = mongoose.model('worker', worker);