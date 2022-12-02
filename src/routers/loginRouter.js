const express = require('express');

const loginController = require('../controllers/loginController');
const { isValidLoginUser } = require('../middlewares/isValidLoginUser');

const router = express.Router();

router.post('/', isValidLoginUser, loginController.userLogin);

module.exports = router;