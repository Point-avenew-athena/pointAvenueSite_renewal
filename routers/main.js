const { response } = require('express');
const express = require('express');
const router = express.Router();
// const fakeData = require('../src/data/fakeData.json')
// const WPAPI = require( 'wpapi' );
// const wp = new WPAPI({ endpoint: 'https://www.pointavenue.com/wp-json/' });

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/about-us', (req, res) => {
  res.render('about-us');
})

router.get('/scholarship', (req, res) => {
  res.render('scholarship');
})

router.get('/careers', (req, res) => {
  res.render('careers');
})

router.get('/news', (req, res) => {
  res.render('news')
})

//* newsletter 리스트 페이지
router.get('/news/newsletter/', (req, res) => {
  res.render('news/newsletter');
})

//* articles 리스트 페이지
router.get('/news/articles/', (req, res) => {
  res.render(`news/articles`);
})

//* newsletter 개별 포스트
router.get('/news/newsletter/:id', (req, res) => {
  res.send(`newsletter's id : ${req.params.id}`);
  // res.render('news/newsletter/newsletter-detail', {data: fakeData});
})

//* articles 개별 포스트
router.get('/news/articles/:id', (req, res) => {
  res.send(`article's id : ${req.params.id}`);
})


module.exports = router;