
// Necesitamos el modelo de users
const userModel = require('../models/user.model');

function getUser(id) {
  return userModel.getUser(id);
}

function getAllUsers() {
  return userModel.getAllUsers();
}


module.exports = {
  getUser,
  getAllUsers,
};