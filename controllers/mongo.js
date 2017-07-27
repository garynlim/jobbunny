var mongoose = require('mongoose');
var moment = require('moment');
var Worker = require('../models/worker');
var Controller = {};

// set up connection to DB
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
var mongodbUri = 'mongodb://jobbunnyadmin:jobbunnyadminasdlkjasdlkj123@ds111103.mlab.com:11103/jobbunnyworkers';
mongoose.connect(mongodbUri, options);
mongoose.Promise = global.Promise;
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () { console.log("Great success!") });


Controller.create = function (data) {
    console.log("Received data for creating entry:");
    console.log(data);

    var newWorker = Worker({
        'first name': data['first name'],
        'last name': data['last name'],
        'gender': data['gender'],
        'emailAddress': data['emailAddress'],
        'jobType': data['jobType'],
        'jobScope': data['jobScope'],
        'salaryHour': data['salaryHour'],
        'phoneNumber': data['phoneNumber'],
        'dateStart': moment(data['dateStart'], 'DD/MM/YYYY').toDate(),
        'dateEnd': moment(data['dateEnd'], 'DD/MM/YYYY').toDate(),
        'jobExperience': data['jobExperience'],
        'salaryMonth': data['salaryMonth'],
        'qualifcationLevel': data['qualifcationLevel'],
        'qualificationSubject': data['qualificationSubject'],
        'qualificationSchool': data['qualificationSchool'],
        'jobScopeSpecial': data['jobScopeSpecial'],
        'profilePic': data['profile pic url']
    });

    return newWorker.save();
}

Controller.addEntry = function (data) {
    var newWorker = Worker({
        'data': JSON.stringify(data)
    });
    return newWorker.save();
}

Controller.read = function () {

}

Controller.readAll = function () {
    return Worker.findById();
}

// Retrieve most recent 20 profiles
Controller.readRecent = function () {
    var numOfProfiles = 20;
    return Worker.find().sort({ $natural: -1 }).limit(numOfProfiles);
}

Controller.update = function (id, val) {
    Worker.findByIdAndUpdate(id, val, { new: true }, (err, res) => {
        if (err) console.log(err);
    });
}

Controller.delete = function () {

}

Controller.filter = function(criteria) {
    // format dates
    
    criteria.dateStart = moment(criteria.dateStart, 'YYYY-MM-DD').toDate();
    criteria.dateEnd = moment(criteria.dateEnd, 'YYYY-MM-DD').toDate();
    
    // get all employees in same jobType and jobScope
    return Worker.find({
        'jobScope': criteria.jobScope, 
        'jobType': criteria.jobType,
        'dateStart': { $lte: criteria.dateStart }, // worker start date <= company start date
        'dateEnd': { $gte: criteria.dateEnd }, // worker end date >= company end date
        $or: [{ // worker salary <= company salary
            'salaryHour': { $lte: criteria.salary }
        }, {
            'salaryMonth': { $lte: criteria.salary }  
        }]
    });
}

// Controller.filter({
//     'jobType': 'Part-timer',
//     'jobScope' : 'Events',
//     'dateStart': '2017-07-28',
//     'dateEnd': '2017-07-29',
//     'salary': 100
// }).then(e => console.log(e));


module.exports = Controller;