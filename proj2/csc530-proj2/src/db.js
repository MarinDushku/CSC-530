// File: db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // or your server IP
  user: 'root',      // your MySQL username
  password: 'your_password', // your MySQL password
  database: 'shopify_app_db' // name of your database
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
