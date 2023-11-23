// controllers/studentController.js
const path = require('path');

// Controller action for the '/students' route
exports.getTeachers = (req, res) => {
  // Logic to retrieve student data from a database or other source

  // Render the view passing student data
  res.render('teachers/index');
};
