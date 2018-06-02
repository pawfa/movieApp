let mongoose = require('mongoose');

module.exports.MovieModel = function Movie(description, content, dateTime){
  this._id = new mongoose.Types.ObjectId();
  this.description = JSON.parse(description) || '';
  this.comments = [{
    _id: new mongoose.Types.ObjectId(),
    content: content || '',
    dateTime: dateTime || ''
  }]
};
