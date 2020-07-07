var express = require('express');
var router = express.Router();
var Request = require('request');

const APIENDPOINT = 'https://forums.dev.rummyfans.com/';
const headersObj = { 
  'Accept': 'application/json',
  'Api-Username': 'sandeep.sandeep.mand',
  'Api-Key': '164980f0794040775d7ae2042a5e82b04b9166454c734166ae2cd3dc92eedf23'
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
