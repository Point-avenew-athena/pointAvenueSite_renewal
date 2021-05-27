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
router.get('/news/list/newsletter', (req, res) => {
  res.render('news/newsletter/index');
});

//* newsletter / articles 개별 포스트
router.get('/news/:id', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  const singlePost = news.filter((news) => (news.id == req.params.id));

  res.render('news/news-single-post', {
    singlePost
  });
});

//* articles 리스트 페이지
router.get('/news/list/articles/', (req, res) => {
  res.render('news/articles/index');
});


module.exports = router;
