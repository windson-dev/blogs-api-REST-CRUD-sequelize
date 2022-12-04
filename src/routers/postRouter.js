const express = require('express');

const { isValidToken } = require('../middlewares/isValidToken');
const { isValidPostId } = require('../middlewares/isValidPostId');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', isValidToken, postController.getAllPost);
router.get('/:id', isValidToken, isValidPostId, postController.findPostById);

module.exports = router;