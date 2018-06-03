let mongoose = require('mongoose');

module.exports.MovieModel = function Movie(description){
  this._id = new mongoose.Types.ObjectId();
  this.description = JSON.parse(description) || '';
};

module.exports.CommentModel = function Comment(body){
  this._id = new mongoose.Types.ObjectId();
  this.movieId = new mongoose.Types.ObjectId(body.movieId);
  this.content = body.content || '';
  this.dateTime = new Date().toLocaleString()
};
