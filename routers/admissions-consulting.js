const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const studies = require('../data/admissions-consulting/case-studies.json');
  res.render('admissions-consulting', { studies });
});



module.exports = router;