var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

/* Con esta ruta obtenemos la info de un usuario */
router.route('/:id')
.get(function(req, res, next) {
  return userController.getUser(req.params.id)
  .then(res.json.bind(res))
  .catch(next);
});



module.exports = router;
