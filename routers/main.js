const express = require("express");
const router = express.Router();

// const helpers = require('../helpers/functions.js');
// const WPAPI = require( 'wpapi' );
// const wp = new WPAPI({ endpoint: 'https://www.pointavenue.com/wp-json/' });

router.get("/", (req, res) => {
  const news = require("../data/point-avenue/news/news.json");
  res.render("index", { news });
});

router.get("/vn", (req, res) => {
  const news = require("../data/point-avenue/news/news.json");
  res.render("index-vn", { news });
});

router.get("/about-us", (req, res) => {
  const teamMembers = require("../data/point-avenue/about-us/team-members.json");
  const locations = require("../data/point-avenue/about-us/locations.json");
  const metaData = {
    name: "About us",
    keywords: [],
  };
  res.render("about-us", { teamMembers, locations });
});

router.get("/vn/about-us", (req, res) => {
  const teamMembers = require("../data/point-avenue/about-us/team-members-vn.json");
  const locations = require("../data/point-avenue/about-us/locations.json");
  const metaData = {
    name: "About us",
    keywords: [],
  };
  res.render("about-vn", { teamMembers, locations });
});

router.get("/scholarship", (req, res) => {
  res.render("scholarship");
});

router.get("/careers", (req, res) => {
  res.render("careers");
});

router.get("/vn/careers", (req, res) => {
  res.render("careers-vn");
});

router.get("/news", (req, res) => {
  const news = require("../data/point-avenue/news/news.json");
  const tv = require("../data/point-avenue/news/tv.json").slice(0, 3);

  res.render("news", { news, tv });
});

router.get("/vn/news", (req, res) => {
  const news = require("../data/point-avenue/news/news-vn.json");
  const tv = require("../data/point-avenue/news/tv.json").slice(0, 3);

  res.render("news-vn", { news, tv });
});

router.get("/vn/policy", (req, res) => {
  res.render("policy-vn");
});

//* newsletter 리스트 페이지
router.get("/news/list/newsletter", (req, res) => {
  const newsletters = require("../data/point-avenue/news/news.json");
  res.render("news/newsletter/list", { newsletters });
});
// str.replace(/"/g, '\\"');
//* newsletter / articles 개별 포스트
router.get("/news/:id", (req, res) => {
  const news = require("../data/point-avenue/news/news.json");
  const singlePost = news.filter((news) => news.id == req.params.id)[0];
  res.render("news/news-single-post", {
    singlePost,
  });
});

router.get("/vn/news/:id", (req, res) => {
  const news = require("../data/point-avenue/news/news-vn.json");
  const singlePost = news.filter((news) => news.id == req.params.id)[0];
  res.render("news/news-single-post-vn", {
    singlePost,
  });
});

//* articles 리스트 페이지
router.get("/news/list/articles", (req, res) => {
  const news = require("../data/point-avenue/news/news.json");
  let articles = news.filter(article => article.type === "Article" || article.type === "extenal");
  res.render("news/articles/list", { news, articles });
});

router.get("/vn/news/list/articles", (req, res) => {
  const news = require("../data/point-avenue/news/news-vn.json");
  let articles = news.filter(article => article.type === "Article" || article.type === "extenal");
  res.render("news/articles/list-vn", { news, articles });
});

// //* TV
// router.get('/news/list/tv', (req, res) => {
//   const tv = require('../data/point-avenue/news/tv.json');
//   res.render('news/tv/index', { tv });
// });

//* TV
router.get("/tv", (req, res) => {
  const tv = require("../data/point-avenue/news/tv.json");
  res.render("tv", { tv });
});

router.get("/vn/tv", (req, res) => {
  const tv = require("../data/point-avenue/news/tv-vn.json");
  res.render("tv-vn", { tv });
});

module.exports = router;
