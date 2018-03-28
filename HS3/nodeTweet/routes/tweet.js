var express = require('express');
var router = express.Router();

const APIError = require('../lib/apierror');
const libCache = require('../lib/cache');


// Funcion para obtener datos de la cache para el listado de los tweets


function getCacheTweet(req, res, next) {
    libCache.getCache()
        .then((resultado) => {
            if (resultado) {
                return res.json(resultado);
            }
            return next();
        });
}


const tweetController = require('../controllers/tweet.controller');

router.route('/search')
    .get(function (req, res, next) {
        let text = req.query.text;
        let user = req.query.user;
        return tweetController.getAllTweets(10, 0, text, user)
            .then((data) => {
                return res.json(data);
            })
            .catch(console.error);
    });




router.route('/:id/users')
    .get(function (req, res, next) {
        return tweetController.getRetweeters(req.params.id)
            .then((data) => {
                return res.json(data);
            })
            .catch(console.error);
    });

router.route('/:id/user')
    .get(function (req, res, next) {
        return tweetController.getTweet(req.params.id)
            .then((data) => {
                console.log(data.id_str);
                console.log(typeof data);
                let obj = {};
                /* let obj = {
                    id_str: data.user.id_str,
                    name: data.user.name,
                    description: data.user.description,
                    location: data.user.location,
                } */
                return res.json(obj);
            })
            .catch(console.error);
    });

router.route('/:id')
    .get(function (req, res, next) {
        return tweetController.getTweet(req.params.id)
            .then((data) => {
                return res.json(data);
            })
            .catch(console.error);
    });

router.route('/')
    .get(
        getCacheTweet,
        function (req, res, next) {
            //getAllTweets(10 --> lim,0 --> page) --> Se puede meter por query lim y page
            return tweetController.getAllTweets(10, 0)
                .then((data) => {
                    req.bbcache = data;
                    next();
                })
                .catch(console.error);
        },
        (req, res, next) => {
            libCache.saveCache(req.bbcache)
                .then(() => res.json(req.bbcache))
                .catch(error => next(error));
        }
    );


module.exports = router;