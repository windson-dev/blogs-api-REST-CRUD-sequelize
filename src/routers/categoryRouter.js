const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');

const { isValidNameCategory } = require('../middlewares/isValidNameCategory');
const { isValidToken } = require('../middlewares/isValidToken');

router.post('/', isValidToken, isValidNameCategory, categoryController.categoryCreate);

module.exports = router;