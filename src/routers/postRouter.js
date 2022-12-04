const express = require('express');

const { isValidToken } = require('../middlewares/isValidToken');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', isValidToken, postController.getAllPost);

module.exports = router;