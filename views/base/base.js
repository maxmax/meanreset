var express = require('express');
var router = express.Router();

var basedate = { title: 'Base' };

router.get('/', function(req, res) {
  var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];
  var tagline = "This base page";
  //response.render('base/index', basedate);
  res.render('base/index', {
    drinks: drinks,
    tagline: tagline
  });
  //console.log(editordate);
});

module.exports = router;
