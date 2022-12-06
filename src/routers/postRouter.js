const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const { isValidToken } = require('../middlewares/isValidToken');
const { isValidPostId } = require('../middlewares/isValidPostId');
const { isValidPostIdUser } = require('../middlewares/isValidPostIdUser');

router.get('/', isValidToken, postController.getAllPost);
router.get('/:id', isValidToken, isValidPostId, postController.findPostById);
router.put('/:id', isValidToken, isValidPostIdUser, postController.blogPostUpdate);

module.exports = router;