const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('camp')
})

router.get('/summer-leader-camp', function (req, res) {
  res.send('Camp > Summer Leader Camp')
})

router.get('/camp/summer-day-camp', function (req, res) {
  res.send('Camp > Summer Day Camp')
})

router.get('/winter-boarding-camp', function (req, res) {
  res.send('Camp > Winter Boarding Camp')
})

router.get('/winter-day-camp', function (req, res) {
  res.send('Camp > Winter Day Camp')
})


module.exports = router