var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there",
    user: "Zach",
    added: new Date()
  },
  {
    text: "What's going on?",
    user: "Hannah",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* GET new post */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Post'})
});

/* make post */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.name, added: new Date()})
  res.redirect('/')
});

module.exports = router;
