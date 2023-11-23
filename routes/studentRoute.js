// public/routes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
// Define your routes
router.get('/student', (req, res) => {
  res.send('Hello from the Student route!');
});
router.get('/', studentController.getStudents);
router.get('/a', studentController.getAllStudents);
module.exports = router;
