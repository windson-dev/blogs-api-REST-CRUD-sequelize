const express = require('express');

const userController = require('../controllers/userController');
const { isValidCreateUser, isValidExistEmail } = require('../middlewares/isValidCreateUser');
const { isValidToken } = require('../middlewares/isValidToken');

const router = express.Router();

router.post('/', isValidCreateUser, isValidExistEmail, userController.userCreate);
router.get('/', isValidToken, userController.findAllUser);

module.exports = router;