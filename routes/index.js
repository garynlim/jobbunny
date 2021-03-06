var express = require('express');
var router = express.Router();
var database = require('../controllers/mongo');
var broadcast = require('../controllers/broadcast');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Jobbunny' });
});

/* GET employee search page. */
router.get('/employeesearch', function (req, res, next) {
  //get data of most recently added employees
  database.readRecent().then(employees => {
    console.log(employees);
    res.render('employeesearch', { title: 'Jobbunny', employees: employees});
  });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Jobbunny' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Jobbunny' });
});

/* GET jobhop page. */
router.get('/jobhop', function (req, res, next) {
  res.render('jobhop', { title: 'Jobbunny' });
});

/* GET postjob page. */
router.get('/postjob', function (req, res, next) {
  res.render('postjob', { title: 'Jobbunny' });
});

/* Search for employees with the required parameters */
router.post('/filter', function (req, res, next) {
  console.log(req.body);
  database.filter(req.body).then(employees => {
    res.render('employeesearch', { title: 'Jobbunny', employees: employees, job: req.body });
  })
})

// POST Worker
router.post('/newbunny', function (req, res, next) {
  var newBunny = database.create(req.body);
  newBunny.then(T => {
    res.send("OK");
  }, error => {
      res.status(500).send()
  });
});

// Broadcast job offer to user
router.post('/offerjob', function (req, res, next) {
  console.log(req.body);
  broadcast(req.body);
  res.send('OK');
});

module.exports = router;
