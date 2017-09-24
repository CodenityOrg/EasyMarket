const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.route('/')
	.get(userController.index)

module.exports = router;
