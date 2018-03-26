const tweetModel = require('../models/tweet.model');

function getAllTweets(lim,page, text, user) {
    return tweetModel.getAllTweets(lim,page, text, user);
}

function getRetweets(id) {
    return tweetModel.getRetweets(id);
}

module.exports = {
    getAllTweets,
    getRetweets,
  };