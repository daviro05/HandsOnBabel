const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet',
    { // El name corresponde con la coleccion.
        id: String,
        text: String,
        user_id: String, // Es el id de usuario que ha creado el tweet
        users: Array, // Todos los usuarios que han hecho RT del Tweet y el propio creador
    },
);

function getAllTweets(lim,page, text,user) {
    let searchObj = {}
    if(user){
        searchObj.user_id = user;
    }
    if(text){
        searchObj.text = {$regex : `.*${text}.*`};
    }
    console.log(searchObj);
    return Tweet.find(searchObj).skip(lim*page).limit(lim);
}

function getRetweets(id) {
    return Tweet.aggregate([
        {"$match": {"id": {"$eq": id}}},
        {"$unwind": "$users"},
        {"$match": {"$expr": {"$ne": ["$user_id", "$users.id"]}}},
        {"$project": {
            "_id": "$users._id",
             "id": "$users.id",
              "name": "$users.name",
               "description": "$users.description",
               "url": "$users.url",
               "statuses_count": "$users.statuses_count"
        }}
    ]);
}

module.exports = {
    getAllTweets,
    getRetweets,
}
