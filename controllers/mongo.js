var mongoose = require('mongoose');
var moment = require('moment');
var Worker = require('../models/worker');
var Controller = {};

// set up connection to DB
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
var mongodbUri = 'mongodb://bunny01:00JobsBunny00@ds131432.mlab.com:31432/jobsbunnyworkers';
mongoose.connect(mongodbUri, options);
mongoose.Promise = global.Promise;
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () { console.log("Great success!") });


Controller.create = function (name, jobType, salary, dateStart, dateEnd, phone, email) {
    var newWorker = Worker({
        name: name,
        preferredJobType: jobType,
        salaryPerHour: salary,
        workDateStart: dateStart,
        workDateEnd: dateEnd,
        phone: phone,
        email: email
    });
    return newWorker.save();
}

Controller.read = function () {

}

Controller.readAll = function () {
    return Worker.findById();
}

Controller.update = function (id, val) {
    Worker.findByIdAndUpdate(id, val, { new: true }, (err, res) => {
        if (err) console.log(err);
    });
}

Controller.delete = function () {

}

module.exports = Controller;