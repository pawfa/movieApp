let express = require('express');
let router = express.Router();
let database = require('../services/databaseService');
let Movie = require('../services/movieModel').Movie;

router.get('/comments', function(req, res, next) {
  database.getAllComments().then( (commentsArr) =>{
    res.send(commentsArr);
  });
});

router.post('/comments', function(req, res, next) {
  console.log(req.body);
  let {movieId, content} = req.body;
  database.insertComment(movieId, content).then(
      res.send(req.body)
  ).catch ( ()=> { res.status(404).send({ error: 'Movie does not exists' }) });
});

module.exports = router;