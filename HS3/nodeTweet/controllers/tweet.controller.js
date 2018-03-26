const tweetModel = require('../models/tweet.model');

function getAllTweets(lim,page) {
    return tweetModel.getAllTweets(lim,page);
}

function getRetweets(id) {
    return tweetModel.getRetweets(id);
}

module.exports = {
    getAllTweets,
    getRetweets,
  };