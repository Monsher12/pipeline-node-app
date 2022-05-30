var express = require('express');
var router = express.Router();
var cors = require('cors');

var allowlist = ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8889']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

/* GET users listing. */
router.get('/', cors(corsOptionsDelegate), function(req, res, next) {
  res.send('backend esta up!');
});

module.exports = router;
