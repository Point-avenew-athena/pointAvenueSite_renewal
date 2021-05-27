const express = require('express');
const router = express.Router();

const elementaryTeachersData = require('../data/programs/teachers/elementary.json');
const middleHighTeachersData = require('../data/programs/teachers/middle-high.json');
const testPrepTeachersData = require('../data/programs/teachers/test-prep.json');
const debateTeachersData = require('../data/programs/teachers/debate.json');

router.get('/', function (req, res) {
  const courses = require('../src/data/courses')
  res.render('programs', { courses });
})

router.get('/elementary-courses', function (req, res) {
  res.render('elementary-course', { teachers: elementaryTeachersData });
  // res.send('Courses > Elementary courses')
});

router.get('/middle-high-school-courses', function (req, res) {
  res.render('middle-high-school-course', { teachers: middleHighTeachersData });
  // res.send('Courses > Middle & Highschool courses')
});

router.get('/debate', function (req, res) {
  res.render('debate-course', { teachers: debateTeachersData });
});

router.get('/test-preparation', function (req, res) {
  // res.send('Courses > Test-preparation')
  res.render('test-preparation', { teachers: testPrepTeachersData });
});

module.exports = router;
