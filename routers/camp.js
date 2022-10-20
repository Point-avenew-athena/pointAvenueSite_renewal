const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('camp')
})

router.get('/summer-boarding-camp', function (req, res) {
  // res.send('Camp > Summer Leader Camp')
  const teamMembers = require("../data/camp/mentors.json");
  res.render('camp/summer-boarding-camp', {teamMembers})
})

router.get('/summer-day-camp', function (req, res) {
  // res.send('Camp > Summer Day Camp')
  const teamMembers = require("../data/camp/mentors-day-camp.json");
  res.render('camp/summer-day-camp', {teamMembers})
})

router.get('/winter-boarding-camp', function (req, res) {
  // res.send('Camp > Summer Day Camp')
  const teamMembers = require("../data/camp/mentors-winter-camp.json");
  res.render('camp/winter-boarding-camp', {teamMembers})
})

router.get('/winter-boarding-camp-vn', function (req, res) {
  // res.send('Camp > Summer Day Camp')
  const teamMembers = require("../data/camp/mentors-winter-camp.json");
  res.render('camp/winter-boarding-camp', {teamMembers})
})

router.get('/winter-day-camp-vn', function (req, res) {
  // res.send('Camp > Summer Day Camp')
  const teamMembers = require("../data/camp/mentors-winter-camp.json");
  res.render('camp/winter-boarding-camp', {teamMembers})
})

router.get('/online-summer-camp', function (req, res) {
  // res.send('Camp > Online Summer Camp')
  res.render('camp/online-summer-camp')
})

router.get('/online-summer-camp-vn', function (req, res) {
  // res.send('Camp > Online Summer Camp')
  res.render('camp/online-summer-camp-vn')
})

router.get('/winter-boarding-camp', function (req, res) {
  res.render('camp/winter-boarding-camp')
})

router.get('/winter-boarding-camp-vn', function (req, res) {
  res.render('camp/winter-boarding-camp-vn')
})

router.get('/winter-day-camp', function (req, res) {
  res.render('camp/winter-day-camp')
})

router.get('/winter-day-camp-vn', function (req, res) {
  res.render('camp/winter-day-camp-vn')
})


// router.get('/winter-boarding-camp', function (req, res) {
//   res.send('Camp > Winter Boarding Camp')
// })

// router.get('/winter-day-camp', function (req, res) {
//   res.send('Camp > Winter Day Camp')
// })


module.exports = router