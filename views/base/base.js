var express = require('express');
var router = express.Router();

var basedate = { title: 'Base Page' };
var title = "This Base";
var style = "/stylesheets/apps.css";
var bundle = "/assets/apps.bundle.js";
var icon = "/img/favicon.ico";

//base ui view, used apps bundle
router.get('/', function(req, res) {
  var appslist = [
    { name: 'buddy', href: '/base/buddy' },
    { name: 'apps', href: '/base/apps' },
    { name: 'fairyapps', href: '/base/fairyapps' }
  ];
  var tagline = "This base page";
  res.render('base/index', {
    title: title,
    style: style,
    icon: icon,
    bundle: bundle,
    appslist: appslist,
    tagline: tagline
  });
});

//constructor ui view
router.get('/apps', function(req, res, next) {
  var title = "This Apps";
  var style = "/stylesheets/apps.css";
  var bundle = "/assets/apps.bundle.js";
  res.render('base/apps', {
    title: title,
    style: style,
    bundle: bundle,
    icon: icon
  });
});

//buddy & router tests
router.get('/buddy', function(req, res, next) {
  var title = "This Buddy";
  var style = "/stylesheets/buddy.css";
  var bundle = "/assets/buddy.bundle.js";
  res.render('base/buddy', {
    title: title,
    style: style,
    bundle: bundle,
    icon: icon
  });
});

//Landing farm app
router.get('/fairyapps', function(req, res, next) {
  var title = "This fairyapps";
  var style = "/stylesheets/fairyapps.css";
  var icon = "/img/favicondev.ico";
  var bundle = "/assets/fairyapps.bundle.js";
  res.render('base/fairyapps', {
    title: title,
    style: style,
    bundle: bundle,
    icon: icon
  });
});

//Soil
router.get('/soil', function(req, res, next) {
  var title = "This fairyapps";
  var style = "/stylesheets/soil.css";
  var bundle = "/assets/soil.bundle.js";
  res.render('base/apps', {
    title: title,
    style: style,
    bundle: bundle,
    icon: icon
  });
});

module.exports = router;
