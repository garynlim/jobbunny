'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var worker = new Schema({
    name: String,
    preferredJobType: String,
    salaryPerHour: Number,
    workDateStart: String,
    workDateEnd: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('worker', worker);