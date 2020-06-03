var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('heyy');
});
router.post('/', function(req, res, next) {
  let response = req.body;
  
  res.status(200).end();
  
});
let analyze1 = function(obj){if (obj) {
  let a = 5;
  
}}

module.exports = router;
