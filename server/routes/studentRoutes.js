const express = require('express');
const router = express.Router();
const {
  getStudentByRollNumber,
  getStudents,
  getFilterOptions,
} = require('../controllers/studentController.js');

router.get('/user', getStudentByRollNumber);

router.get('/students', getStudents);

router.get('/filter-options', getFilterOptions);

module.exports = router;
