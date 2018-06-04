const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/comments:id', commentsController.findComments);
router.get('/comments', commentsController.findAll);
router.post('/comments', commentsController.save);

module.exports = router;