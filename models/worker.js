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
    'salaryHour': Number,
    'phoneNumber': String,
    'dateStart': Date,
    'dateEnd': Date,
    'jobExperience': String,
    'salaryMonth': Number,
    'qualifcationLevel': String,
    'qualificationSubject': String,
    'qualificationSchool': String,
    'jobScopeSpecial': String,
    'profilePic': String,
    'messengerUserId': String
});

module.exports = mongoose.model('worker', worker);