var express = require('express');
var router = express.Router();

var basedate = { title: 'Base' };

router.get('/', function(request, response) {
  response.render('base/index', basedate);
  //console.log(editordate);
});

module.exports = router;
