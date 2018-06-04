const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.findOne);
router.post('/movies', moviesController.insert);

module.exports = router;