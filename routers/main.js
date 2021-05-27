const express = require('express');
const router = express.Router();

// const helpers = require('../helpers/functions.js');
// const WPAPI = require( 'wpapi' );
// const wp = new WPAPI({ endpoint: 'https://www.pointavenue.com/wp-json/' });

router.get('/', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  res.render('index', {news});
});

router.get('/about-us', (req, res) => {
  const teamMembers = require('../data/point-avenue/about-us/team-members.json');
  res.render('about-us', { teamMembers });
});

router.get('/scholarship', (req, res) => {
  res.render('scholarship');
});

router.get('/careers', (req, res) => {
  res.render('careers');
});

router.get('/news', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  const tv = require('../data/point-avenue/news/tv.json');
  // const SPOTLIGHT_NEWS = [3475, 3469, 3433, 3419, 2624, 2557];
  // const filteredNews = news.filter(item => SPOTLIGHT_NEWS.some(id => id === item.id)); 

  // console.log("helpers:", helpers)
  // res.render('news', {news, mainNews: filteredNews, helpers});
  res.render('news', {news, tv});
});

//* newsletter 리스트 페이지
router.get('/news/newsletter/', (req, res) => {
  res.render('news/newsletter/index');
});

//* newsletter 개별 포스트
router.get('/news/newsletter/:id', (req, res) => {
  // res.send(`newsletter's id : ${req.params.id}`);
  res.render('news/newsletter/newsletter-detail', {
    id: req.params.id
  });
});

//* articles 리스트 페이지
router.get('/news/articles/', (req, res) => {
  res.render('news/articles/index');
});


//* articles 개별 포스트
router.get('/news/articles/:id', (req, res) => {
  res.render('news/articles/article-detail', { id: req.params.id})
  // res.send(`article's id : ${req.params.id}`);
});

module.exports = router;
