exports.messages = require('./messages.js');
exports.users = require('./users.js');
exports.dbConnection = require('../db/index.js');
// layer to define logic - how to interact
// messages
// dbConnection.query ( [id, username, message, roomname], (err, results) ) => {
// if (err) throw err
// else C.L results
// users
