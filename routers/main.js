const express = require('express');
const router = express.Router();

// const helpers = require('../helpers/functions.js');
// const WPAPI = require( 'wpapi' );
// const wp = new WPAPI({ endpoint: 'https://www.pointavenue.com/wp-json/' });

router.get('/', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  res.render('index', { news });
});

router.get('/about-us', (req, res) => {
  const teamMembers = require('../data/point-avenue/about-us/team-members.json');
  const locations = require('../data/point-avenue/about-us/locations.json');
  const metaData = {
    name: 'About us',
    keywords: []

  }
  res.render('about-us', { teamMembers, locations });
});

router.get('/scholarship', (req, res) => {
  res.render('scholarship');
});

router.get('/careers', (req, res) => {
  res.render('careers');
});

router.get('/news', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  const tv = require('../data/point-avenue/news/tv.json').slice(0, 3);

  res.render('news', { news, tv });
});

//* newsletter 리스트 페이지
router.get('/news/list/newsletter', (req, res) => {
  const newsletters = require('../data/point-avenue/news/news.json');
  res.render('news/newsletter/list', { newsletters });
});
// str.replace(/"/g, '\\"');
//* newsletter / articles 개별 포스트
router.get('/news/:id', (req, res) => {
  const news = require('../data/point-avenue/news/news.json');
  const singlePost = news.filter((news) => news.id == req.params.id)[0];
  res.render('news/news-single-post', {
    singlePost
  });
});

//* articles 리스트 페이지
router.get('/news/list/articles', (req, res) => {
  const articles = require('../data/point-avenue/news/news.json');
  res.render('news/articles/list', {articles});
});

// //* TV
// router.get('/news/list/tv', (req, res) => {
//   const tv = require('../data/point-avenue/news/tv.json');
//   res.render('news/tv/index', { tv });
// });

//* TV
router.get('/tv', (req, res) => {
  const tv = require('../data/point-avenue/news/tv.json');
  res.render('tv', { tv });
});

module.exports = router;
