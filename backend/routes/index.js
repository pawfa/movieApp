let express = require('express');
let router = express.Router();
const commentsController = require('../controllers/commentsController');
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.findOne);
router.post('/movies', moviesController.insert);
router.get('/comments', (req, res, next) =>  req.query.id ? commentsController.findComments(req,res,next) : commentsController.findAll(req,res,next));
router.post('/comments', commentsController.save);

module.exports = router;
