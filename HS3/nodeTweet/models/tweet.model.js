const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', { // El name corresponde con la coleccion.
    id: String,
    text: String,
    user_id: String, // Es el id de usuario que ha creado el tweet
    users: Array, // Todos los usuarios que han hecho RT del Tweet y el propio creador
},
);
