var Opp = require('../models/OppClass.js');

exports.priya = function(req, res) {
  Opp.find(function(err, threads) {
    res.send(threads);
  });
}