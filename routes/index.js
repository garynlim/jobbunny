var express = require('express');
var router = express.Router();
var mongoController = require('../controllers/mongo');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Jobbunny' });
});

/* GET employee search page. */
router.get('/employeesearch', function (req, res, next) {
  res.render('employeesearch', { title: 'Jobbunny' });
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

// POST Worker
router.post('/newbunny', function (req, res, next) {
  var newBunny = mongoController.create(req.body);
  newBunny.then(T => {
    res.send("OK");
  }, error => {
      res.status(500).send()
  });
});

module.exports = router;
