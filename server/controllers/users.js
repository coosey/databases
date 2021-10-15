var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, results) {
      if (err) {
        console.error('Cannot retrieve users from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        console.error('Cannot post user to the database: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
