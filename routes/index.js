var express = require('express');
var router = express.Router();
var Request = require('request');

const APIENDPOINT = process.env.API_END_POINT;

const headersObj = { 
  'Accept': 'application/json',
  'Api-Username': process.env.API_USER_NAME,
  'Api-Key': process.env.API_KEY
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/latest', function(req, res, next) {
  Request.get({
    'url': `${APIENDPOINT}/latest`,
    'headers': headersObj
  }, 
  (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.status(200).json(JSON.parse(body));
  });
});

router.get('/categories', function(req, res, next) {
  Request.get({
    'url': `${APIENDPOINT}/categories`,
    'headers': headersObj
  }, 
  (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.status(200).json(JSON.parse(body));
  });
});

router.get('/top', function(req, res, next) {
  Request.get({
    'url': `${APIENDPOINT}/top`,
    'headers': headersObj
  }, 
  (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.status(200).json(JSON.parse(body));
  });
});

router.get('/about', function(req, res, next) {
  Request.get({
    'url': `${APIENDPOINT}/about`,
    'headers': headersObj
  }, 
  (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.status(200).json(JSON.parse(body));
  });
});

router.get('/top-contributors', function(req, res, next) {
  Request.get({
    'url': `${APIENDPOINT}/directory_items.json?period=quarterly&order=days_visited`,
    'headers': headersObj
  }, 
  (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.status(200).json(JSON.parse(body));
  });
});

module.exports = router;
