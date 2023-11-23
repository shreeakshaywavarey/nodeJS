// public/routes/index.js
const express = require('express');
const router = express.Router();

const teacherRoutes = require('./teacherRoute');
const studentRoutes = require('./studentRoute');

// Routes for teachers
router.use('/teachers', teacherRoutes);

// Routes for students
router.use('/students', studentRoutes);

module.exports = router;
