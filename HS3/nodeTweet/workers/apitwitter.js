const Twitter = require('twitter');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodetweet');

const Tweet = mongoose.model('TweetsApi',
    {   id_str: String,
        text: String,
        user_id: String,
        users: Array, 
    },
);


const client = new Twitter({
consumer_key: "asRcZ4icN3zHbzr8eEzze0SrD",
consumer_secret: "YbBLNvTuAwX21vG13qx8D80f2ioXsSnsiNbgC2Kwh3LjcVeAGw",
access_token_key: "412317152-viVlZiZhlg54vZNeQSnLCUW6ZnVQIQThfdzbcA91",
access_token_secret: "dQjeZVA9jZYleqrZiNe3fqnDLeakrtkz2BwV4tES2fjQG"
});

client.stream('statuses/filter', { track: 'hola', language: 'es'}, function (stream) {
stream.on('data', function (tweet) {
        //console.log(tweet.user.screen_name);
        var TwitterData = new Tweet(tweet); // create object 
        TwitterData.save(); // save data to DB
        //console.log(tweet);

});

stream.on('error', function (error) {
console.log(error);
});
});