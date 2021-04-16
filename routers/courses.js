const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('classes')
})

router.get('/elementary-courses', function (req, res) {
  res.send('Courses > Elementary courses')
})

router.get('/middle-highschool-courses', function (req, res) {
  res.send('Courses > Middle & Highschool courses')
})

router.get('/debate', function (req, res) {
  res.send('Courses > Debate')
})

router.get('/test-preparation', function (req, res) {
  res.send('Courses > Test-preparation')
})


module.exports = router