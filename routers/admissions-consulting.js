const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const news = require("../data/point-avenue/news/news.json");
  const studies = require('../data/admissions-consulting/case-studies.json');
  const mentors = require('../data/admissions-consulting/mentors.json');
  res.render('admissions-consulting', { studies, mentors, news });
});



module.exports = router;