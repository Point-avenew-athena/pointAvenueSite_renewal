const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const studies = require('../data/admissions-consulting/case-studies-vn.json');
  const mentors = require('../data/admissions-consulting/mentors.json');
  res.render('admissions-consulting-vn', { studies, mentors });
});



module.exports = router;