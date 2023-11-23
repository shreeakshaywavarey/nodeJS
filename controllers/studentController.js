// controllers/studentController.js
const path = require('path');
const db = require('../config/db'); // Import the database connection
// Controller action for the '/students' route
exports.getStudents = (req, res) => {
  // Logic to retrieve student data from a database or other source
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    // ... More students
  ];

  // Render the view passing student data
  res.render('students/index', { students });
};

exports.getAllStudents = (req, res) => {
  const query = 'SELECT * FROM tbl_student';

  db.pool.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Assuming the query was successful, render the 'students/index' EJS file with the 'results' data
    res.render('students/index', { students: results });
  });
};