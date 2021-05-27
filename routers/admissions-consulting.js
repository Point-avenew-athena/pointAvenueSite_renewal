const express = require('express');
const router = express.Router();
const studiesData = require('../data/point-avenue/admissions-consulting/case-studies.json')

router.get('/', function (req, res) {
  res.render('admissions-consulting',{ studies : studiesData })
})

module.exports = router