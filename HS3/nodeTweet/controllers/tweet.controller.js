const tweetModel = require('../models/tweet.model');

function getAllTweets(lim,page, text, user) {
    return tweetModel.getAllTweets(lim,page, text, user);
}

function getTweet(id) {
    return tweetModel.getTweet(id);
}

function getRetweeters(id) {
    return tweetModel.getRetweeters(id);
}

module.exports = {
    getAllTweets,
    getRetweeters,
    getTweet,
  };