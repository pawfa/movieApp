const database = require('../services/databaseService');
const fetchMoviesFromExternalApiService = require(
    '../services/externalApiFetchingService');

module.exports =  {

  findOne(req, res, next){
      database.getAllMovies().then( moviesArr => {
        res.send(moviesArr);
      });
  },
  insert(req, res ,next){
    let searchQuery = req.body.query;
    searchQuery ? fetchMoviesFromExternalApiService.fetch(searchQuery).then(
        (data) => {
          let err = JSON.parse(data)['Error'];
          if (err) {
            res.status(404).send({error: err});
          } else {
            database.insertMovie(data).then((data) => {
              res.send(data);
            });
          }
        }).catch(
        () => res.status(404).send({error: 'Movie not saved in database'}))
        : res.status(404).send({error: 'Body is empty!'});
  },
};