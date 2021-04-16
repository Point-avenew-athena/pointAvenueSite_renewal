const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/about-us', (req, res) => {
  res.render('about-us')
})

router.get('/scholarship', (req, res) => {
  res.send('Main > Scholarship')
})

router.get('/careers', (req, res) => {
  res.send('Main > Careers')
})

router.get('/news', (req, res) => {
  res.send('Main > News')
})


module.exports = router;