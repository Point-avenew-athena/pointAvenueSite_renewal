const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('notice')
})

router.get('/pa-lotte-finance', function (req, res) {
  // res.send('Camp > Summer Leader Camp')
  res.render('notice/pa-lotte-finance')
})

module.exports = router