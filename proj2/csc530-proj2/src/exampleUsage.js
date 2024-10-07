// File: exampleUsage.js

const connection = require('./db');

// Example: Fetch all users
connection.query('SELECT * FROM Users', (err, results) => {
  if (err) {
    console.error('Error fetching users:', err.message);
    return;
  }
  console.log('Users:', results);
});
