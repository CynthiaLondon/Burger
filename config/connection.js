// Importing the needed node packages
var mysql = require("mysql");

// Creating the connection variable
var connection;
//var PORT = process.env.PORT || 3306;

// Setting up the connection to the database for use on heroku or locally
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "kwo5thohmffdsufk",
    password: "upw6c956a2q85no3",
    database: "mtavzq02kowdh54k"
  });
};

// // Making connection
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Exporting connection for the ORM to use
connection.connect();
module.exports = connection;