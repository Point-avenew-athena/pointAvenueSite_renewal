const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('camp')
})

router.get('/summer-boarding-camp', function (req, res) {
  // res.send('Camp > Summer Leader Camp')
  res.render('camp/summer-boarding-camp-vn')
})

router.get('/summer-day-camp', function (req, res) {
  // res.send('Camp > Summer Day Camp')
  res.render('camp/summer-day-camp-vn')
})

router.get('/online-summer-camp', function (req, res) {
  // res.send('Camp > Online Summer Camp')
  res.render('camp/online-summer-camp-vn')
})

router.get('/online-summer-camp-vn', function (req, res) {
  // res.send('Camp > Online Summer Camp')
  res.render('camp/online-summer-camp-vn')
})

router.get('/winter-boarding-camp', function (req, res) {
  res.render('camp/winter-boarding-camp-vn')
})

router.get('/winter-boarding-camp-vn', function (req, res) {
  res.render('camp/winter-boarding-camp-vn')
})

router.get('/winter-day-camp', function (req, res) {
  res.render('camp/winter-day-camp-vn')
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