var db = require('../db');

module.exports = {
  // fetch all users
  getAll: function (callback) {
    // write query logic to fetch all users
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  // create a user
  create: function (params, callback) {
    // write query logic to insert new username value
    var queryStr = 'INSERT INTO users(username) VALUES (?)';
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  }
};
