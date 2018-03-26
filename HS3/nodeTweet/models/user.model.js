const mongoose = require('mongoose');

const User = mongoose.model('User', { // El name corresponde con la coleccion.
  id: String,
  name: String,
  description: String,
  url: String,
  statuses_count: Number, // El numero de tweets y Rt del usuario actual
},
);


function getUser(id){
  return User.find({id: id});
}

module.exports = {
  getUser,
}
