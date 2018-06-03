let express = require('express');
let router = express.Router();
let database = require('../services/databaseService');

router.get('/comments', function(req, res, next) {
  if(req.query.id){
    database.getCommentsFromId(req.query.id).then( (comments) =>{
      res.send(comments);
    }).catch(
        ()=> { res.status(404).send({ error: 'Wrong movie id' }) }
    );
  }else{
    database.getAllComments().then( (comments) =>{
      res.send(comments);
    })
  }
});

router.post('/comments', function(req, res, next) {
  database.insertComment(req.body).then(
      (data) =>{
        res.send(data)
      }
  ).catch ( (e)=> { res.status(404).send({ error: 'Error while inserting comment' }) });
});

module.exports = router;