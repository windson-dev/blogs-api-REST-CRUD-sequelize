const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

const { isValidLoginUser } = require('../middlewares/isValidLoginUser');

router.post('/', isValidLoginUser, loginController.userLogin);

module.exports = router;