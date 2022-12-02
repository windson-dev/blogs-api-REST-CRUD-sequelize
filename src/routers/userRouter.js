const express = require('express');

const userController = require('../controllers/userController');
const { isValidCreateUser, isValidExistEmail } = require('../middlewares/isValidCreateUser');

const router = express.Router();

router.post('/', isValidCreateUser, isValidExistEmail, userController.userCreate);

module.exports = router;