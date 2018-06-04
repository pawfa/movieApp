const mongoose = require('mongoose');
const {MovieModel} = require('./dbModels');
const {CommentModel} = require('./dbModels');

const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: JSON,
});

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movieId: mongoose.Schema.Types.ObjectId,
  content: String,
  dateTime: Date,
});

const Movie = mongoose.model('Movie', movieSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
  createDb : () => mongoose.connect(
      'mongodb://localhost:27017/movies', err => {
        if (err) throw err;
        console.log('Successfully connected');
      }),

/* MOVIE FUNCTIONS */
insertMovie : (data) => {
  let imdbID = JSON.parse(data).imdbID;
  return new Promise((resolve, reject) => {
    Movie.findOne({'description.imdbID': imdbID}).then(movie => {
      if (!movie) {
        let insMovie = new Movie(new MovieModel(data));
        insMovie.save(err => {
          if (err) throw err;
          resolve(insMovie);
          console.log('Movie successfully saved.');
        });
      } else {
        resolve(movie);
        console.log('movie already exists in database');
      }
    });
  });

},

getAllMovies : () => {
  return new Promise((resolve, reject) => {
    Movie.find({}, (err, movies) => {
    }).then((movies) => {
      resolve(movies);
    });
  });
},

/* COMMENTS FUNCTIONS */

insertComment : body => {
  return new Promise(function(resolve, reject) {
    let insCom = new Comment(new CommentModel(body));
    insCom.save(
        err => {
          if (err) throw err;
          resolve(insCom);
          console.log('Comment successfully saved.');
        });
  });
},

getAllComments : () => {
  return new Promise((resolve, reject) => {
    Comment.find({})
        .sort({dateTime: -1})
        .exec((err, comments) => resolve(comments));
  });
},

getCommentsFromId : movieId => {
  return new Promise((resolve, reject) => {
    Comment.find({movieId: movieId})
        .sort({dateTime: -1})
        .exec((err, comments) => {
          err || comments.length === 0? reject(new Error()) : resolve(comments)
        });
  });
}
};
