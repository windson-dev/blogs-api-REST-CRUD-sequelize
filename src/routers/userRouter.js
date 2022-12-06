const express = require('express');

const userController = require('../controllers/userController');

const { isValidCreateUser, isValidExistEmail } = require('../middlewares/isValidCreateUser');
const { isValidToken } = require('../middlewares/isValidToken');
const { isValidUserId } = require('../middlewares/isValidUserId');

const router = express.Router();

router.post('/', isValidCreateUser, isValidExistEmail, userController.userCreate);
router.get('/', isValidToken, userController.findAllUser);
router.get('/:id', isValidToken, isValidUserId, userController.findUserById);

module.exports = router;