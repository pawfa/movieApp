const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// router.get('/comments:id', commentsController.findComments);
router.get('/comments', (req, res, next) =>  req.query.id ? commentsController.findComments(req,res,next) : commentsController.findAll(req,res,next));
router.post('/comments', commentsController.save);

module.exports = router;