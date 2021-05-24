const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const courses = require('../src/data/courses')
  res.render('programs', { courses });
})

router.get('/elementary-courses', function (req, res) {
  res.render('elementary-course');
  // res.send('Courses > Elementary courses')
})

router.get('/middle-high-school-courses', function (req, res) {
  res.render('middle-high-school-course');
  // res.send('Courses > Middle & Highschool courses')
})

router.get('/debate', function (req, res) {
  res.render('debate-course')
})

router.get('/test-preparation', function (req, res) {
  // res.send('Courses > Test-preparation')
  res.render('test-preparation')
})


module.exports = router