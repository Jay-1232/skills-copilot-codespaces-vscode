// Create web server 
// Create web server 
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { upload } = require('../middleware/uploadMiddleware');

router.post('/create', upload.single('image'), commentController.createComment);
router.get('/get', commentController.getComment);
router.get('/get/:id', commentController.getCommentById);
router.put('/update/:id', upload.single('image'), commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;