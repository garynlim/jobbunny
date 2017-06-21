var express = require('express');
var router = express.Router();
var mongoController = require('../controllers/mongo');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
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
