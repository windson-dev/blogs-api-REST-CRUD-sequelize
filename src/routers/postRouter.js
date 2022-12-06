const express = require('express');

const { isValidToken } = require('../middlewares/isValidToken');
const { isValidPostId } = require('../middlewares/isValidPostId');
const { isValidPostIdUser } = require('../middlewares/isValidPostIdUser');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', isValidToken, postController.getAllPost);
router.get('/:id', isValidToken, isValidPostId, postController.findPostById);
router.put('/:id', isValidToken, isValidPostIdUser, postController.blogPostUpdate);

module.exports = router;