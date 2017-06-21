'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worker = new Schema({
    'first name': String,
    'last name': String,
    'gender': String,
    'emailAddress': String,
    'jobType': String,
    'jobScope': String,
    'salaryHour': String,
    'phoneNumber': String,
    'dateStart': String,
    'dateEnd': String,
    'jobExperience': String,
    'salaryMonth': String,
    'qualifcationLevel': String,
    'qualificationSubject': String,
    'qualificationSchool': String,
    'jobScopeSpecial': String
});

module.exports = mongoose.model('worker', worker);