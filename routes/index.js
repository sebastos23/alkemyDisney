var express = require('express');
var router = express.Router();
const db = require('../database/models')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Disney' });
});

module.exports = router;
