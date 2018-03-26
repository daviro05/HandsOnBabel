
// Necesitamos el modelo de users
const userModel = require('../models/user.model');

function getUser(id) {
  return userModel.getUser(id);
}


module.exports = {
  getUser,
};