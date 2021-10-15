var db = require('../db');

module.exports = {
  // fetch all messages
  // id, username, message, roomname
  getAll: function (callback) {
    var queryStr = 'SELECT messages.id, messages.message, messages.roomname users.username \
                    FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) \
                    ORDER BY messages.id desc';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },
  // create a message for a user id based on given username
  create: function (params, callback) {
    var queryStr = 'INSERT INTO messages(text, userid, roomname) \
                    VALUE (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  }
};

