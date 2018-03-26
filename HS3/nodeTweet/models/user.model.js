const mongoose = require('mongoose');
const APIError = require('../lib/apierror');

const User = mongoose.model('User', { // El name corresponde con la coleccion.
  id: String,
  name: String,
  description: String,
  url: String,
  statuses_count: Number, // El numero de tweets y Rt del usuario actual
},
);


function getUser(id) {
  return new Promise((resolve, reject) => {
    let user = User.findOne({ id: id }).then((existUser) => {
    if(existUser){
      resolve(user);
    }
    reject(new APIError('El usuario no existe'));
  });
  });
}

module.exports = {
  getUser,
}
