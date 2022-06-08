const express = require("express");

const controller = require('../controllers/blogController');

const router = express.Router();

router.get('/all/', controller.readCollection);
router.get('/:blogId', controller.getBlogByAuthor);
router.get('/', controller.homepage);
router.post('/', controller.createBlog);
router.patch('/:blogId', controller.updateBlog);
router.delete('/:blogId', controller.deleteBlog);

module.exports = router;
