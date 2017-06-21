var express = require('express');
var router = express.Router();
var mongoController = require('../controllers/mongo');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST Worker
router.post('/newbunny', function (req, res, next) {
  console.log("new bunny");
  console.log(req.body);
  // var promise = mongoController.create(req.body.name, req.body.jobType,
  //   req.body.salary, req.body.dateStart, req.body.dateEnd,
  //   req.body.phone, req.body.email);
  // promise.then(T => {
  //   res.json(T);
  // }, error => {
  //   res.status(500).send(error);
  // })
  res.send("OK");

});

module.exports = router;
