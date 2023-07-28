var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About' });
});

/* GET contact page.*/


/* GET project page. 
router.get('/project', function(req, res, next) {
  res.render('pages/projects', { title: 'Project' });
});*/

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('pages/service', { title: 'Service' });
});

module.exports = router;
