var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

/* Con esta ruta obtenemos la info de un usuario */
router.get('/:id', function(req, res, next) {
  userController.getUser(req.params.id)
  .then((data) => {
    return res.json(data);
  })
  .catch(console.error);

});

module.exports = router;
