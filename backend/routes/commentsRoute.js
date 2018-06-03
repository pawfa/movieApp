let express = require('express');
let router = express.Router();
let database = require('../services/databaseService');

router.get('/comments', function(req, res, next) {
  req.query.id ?
    database.getCommentsFromId(req.query.id).then( (comments) =>{
      res.send(comments);
    }).catch(
        ()=>  res.status(404).send({ error: 'Wrong movie id' })
    )
  :
    database.getAllComments().then( comments =>
      res.send(comments)
    )

});

router.post('/comments', function(req, res, next) {
  req.body.content ? database.insertComment(req.body).then(
      data => res.send(data)
  ).catch ( ()=>  res.status(404).send({ error: 'Error while inserting comment' }) )
      : res.status(404).send({ error: 'Body is empty!' })
});

module.exports = router;