const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodetweet');
const datos_tweets = require('./datos_tweets');
const datos_users = require('./datos_users');
const P = require('bluebird');

const User = mongoose.model('User', {
    id: String,
    name: String,
    description: String,
    url: String,
    statuses_count: Number,
});

const Tweet = mongoose.model('Tweet',
    {   id: String,
        text: String,
        user_id: String,
        users: Array, 
    });

P.each(datos_users, element => new User(element).save())
.then(console.log);

P.each(datos_tweets, element => new Tweet(element).save())
.then(console.log);
