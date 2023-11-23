// public/routes.jsstudentController
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Define your routes
// router.get('/teacher', (req, res) => {
//   res.send('Hello from the Teacher route!');
// });
router.get('/', teacherController.getTeachers);

module.exports = router;
