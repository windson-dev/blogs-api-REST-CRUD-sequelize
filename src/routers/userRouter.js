const express = require('express');

const loginController = require('../controllers/loginController');

// const { validateLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', loginController.userLogin);

module.exports = router;
