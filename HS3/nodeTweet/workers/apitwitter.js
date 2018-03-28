const Twitter = require('twitter');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodetweet');

const Tweet = mongoose.model('TweetsApi',
    {
        id: String,
        text: String,
        user: Object,
        /* users: Array, */
    },
);

const User = mongoose.model('UsersApi',
    {
        id: String,
        name: String,
        description: String,
        url: String,
        statuses_count: Number,
    });

//DAVID
const client = new Twitter({
    consumer_key: "asRcZ4icN3zHbzr8eEzze0SrD",
    consumer_secret: "YbBLNvTuAwX21vG13qx8D80f2ioXsSnsiNbgC2Kwh3LjcVeAGw",
    access_token_key: "412317152-viVlZiZhlg54vZNeQSnLCUW6ZnVQIQThfdzbcA91",
    access_token_secret: "dQjeZVA9jZYleqrZiNe3fqnDLeakrtkz2BwV4tES2fjQG"
});

//CARLOS
/* const client = new Twitter({
    consumer_key: "qKRqYxvy5Tzk2M85mAL0akvr6",
    consumer_secret: "JStIxsU9kfBNSffn6NIkQmbc2EwtpKsdpOy7u1EAmHZRoywt9s",
    access_token_key: "2617008931-suJ9nVCdLMBHTomiDMWWZcbbtBDEZmse0w0ORWE",
    access_token_secret: "CSwZgQnmuWnO4zhZHKilVVA0Z2NyYXFjOLgFmaZUNfPVb"
}); */

client.stream('statuses/filter', { track: 'hola', language: 'es' }, function (stream) {
    stream.on('data', function (tweet) {
        //console.log(tweet.user);
        var TwitterData = new Tweet(tweet); // create object 
         // save data to DB
        //console.log(tweet);
        /* let retweeters = [];
        console.log('idTweet', tweet.id_str);
        console.log(typeof tweet.id_str);*/
        console.log(typeof TwitterData.id);

        client.get('statuses/retweeters/ids', {id: TwitterData.id, cursor: 0, stringify_ids: 'true'})
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));

        /* TwitterData.users = retweeters; */
        /* console.log(TwitterData.users); */
        TwitterData.save(); 
        var UserData = new User(tweet.user); // create object 
        UserData.save(); // save data to DB
         /* '971484200363798529' */ 
    });

    stream.on('error', function (error) {
        console.log(error);
    });
});

/* client.get('statuses/retweeters/ids', {id: '978685472800206849', cursor: 0, stringify_ids: 'true'})
        .then(data => {
            retweeters = data.ids;
            console.log('retweeters',data.ids);
        }) */





/* client.stream('statuses/retweeters/ids', {  }, function (stream) {
    stream.on('data', function (tweet) {
        var UserData = new User(tweet.user); // create object 
        UserData.save(); // save data to DB

    });

    stream.on('error', function (error) {
        console.log(error);
    });
}); */