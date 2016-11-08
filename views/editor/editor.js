var express = require('express');
var router = express.Router();

var editordate = { title: 'Editor' };

router.get('/', function(request, response) {
  response.render('editor/index', editordate);
  //console.log(editordate);
});

module.exports = router;
