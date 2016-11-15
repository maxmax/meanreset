var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var COMMENTS_FILE = path.join(__dirname, '../data/comments.json');
var TERMS_FILE = path.join(__dirname, '../data/terms.json');

var editordate = { title: 'Editor' };
var tagline = "This edit page";

router.get('/', function(req, res) {
  res.render('editor/index', {
    editordate,
    tagline: tagline
  });
});

router.get('/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

router.post('/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});

module.exports = router;
