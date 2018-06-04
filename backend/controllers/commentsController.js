const database = require('../services/databaseService');
module.exports = {

  findComments(req, res, next) {
    database.getCommentsFromId(req.params.id).then((comments) => {
      res.send(comments);
    }).catch(
        () => res.status(404).send({error: 'Wrong movie id'})
    )},
  save(req, res, next) {
    req.body.content ? database.insertComment(req.body)
        .then(
            data => res.send(data)
        )
        .catch(() => res.status(404)
            .send({error: 'Error while inserting comment'}))
        : res.status(404).send({error: 'Body is empty!'});
  },
  findAll(req, res, next) {
    database.getAllComments().then(comments =>
        res.send(comments),
    )},
};