var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected');
  }

});

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

module.exports.dbConnection = dbConnection;