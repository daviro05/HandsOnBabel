var express = require('express');
var router = express.Router();

const APIError = require('../lib/apierror');

const tweetController = require('../controllers/tweet.controller');

router.route('/search')
.get(function(req, res, next) {
    let text = req.query.text;
    console.log('text',text);
    let user = req.query.user;
    console.log('user',user);
  return tweetController.getAllTweets(10,0,text,user)
  .then((data) => {
      return res.json(data);
  })
  .catch(console.error);
});

router.route('/:id')
.get(function(req, res, next) {
  return tweetController.getRetweets(req.params.id)
  .then((data) => {
      return res.json(data);
  })
  .catch(console.error);
});

router.route('/')
.get(function(req, res, next) {
    //getAllTweets(10 --> lim,0 --> page) --> Se puede meter por query lim y page
  return tweetController.getAllTweets(10,0)
  .then((data) => {
      return res.json(data);
  })
  .catch(console.error);
});







module.exports = router;