let express = require('express');
let router = express.Router();
let fetchMoviesFromExternalApiService = require(
    '../services/externalApiMoviesFetchingService');
let database = require('../services/databaseService');

router.get('/movies', function(req, res, next) {
  database.getAllMoviesTitles().then((moviesArr) => {
    res.send(moviesArr);
  });
});

router.post('/movies', function(req, res, next) {
  let searchQuery = req.body.query;
  console.log(searchQuery);
  if (searchQuery) {
    fetchMoviesFromExternalApiService.fetch(searchQuery).then(
        (data) => {
          let parsedData = JSON.parse(data);
          if (parsedData['Error']) {
            res.status(404).send({error: parsedData['Error']});
          } else {
            database.insertMovie(data);
            res.send(Object.assign(req.body, JSON.parse(data)));
          }
        });
  } else {
    res.status(404).send({error: 'Body is empty!'});
  }
});

module.exports = router;