var express = require('express');
var router = express.Router();

const APIError = require('../lib/apierror');
const libCache = require('../lib/cache');


// Funcion para obtener datos de la cache para el listado de los tweets


function getCacheTweet(req, res, next) {
    libCache.getCache()
      .then((resultado) => {
        if (resultado) {
          console.log('cache');
          return res.json(resultado);
        }
        return next();
      });
  }


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

router.route('/:id/users')
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


/* router.route('/')
  .get(
    getCachePackage,
    (req, res, next) => {
      packageCtrl.get(req.params.name)
        .then((data) => {
          console.log('data', data);
          req.bbcache = data;
          next();
        })
        .catch(error => next(error));
    },
    (req, res, next) => {
      console.log('req.cache', req.bbcache);
      libCache.saveCache(req.bbcache)
        .then(() => res.json(req.bbcache))
        .catch(error => next(error));
    },
  ); */







module.exports = router;