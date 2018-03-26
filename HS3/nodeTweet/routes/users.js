var express = require('express');
var router = express.Router();

const APIError = require('../lib/apierror');

const userController = require('../controllers/user.controller');

/* Con esta ruta obtenemos la info de un usuario */
router.route('/:id')
.get(function(req, res, next) {
  return userController.getUser(req.params.id)
  .then((data) => {
    if(data){
      return res.json(data);
    }
    next(new APIError("El usuario no existe"));
  })
  .catch(console.error);
});



module.exports = router;
