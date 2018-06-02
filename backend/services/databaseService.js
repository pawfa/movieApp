

let mongoose = require('mongoose');
let {MovieModel} = require('./dbModels');
let {CommentModel} = require('./dbModels');
const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: JSON
});

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movieId: mongoose.Schema.Types.ObjectId,
  content: String,
  dateTime: Date
});

let Movie = mongoose.model('Movie', movieSchema);
let Comment = mongoose.model('Comment', commentSchema);

module.exports.createDb = () => mongoose.connect(
    'mongodb://localhost:27017/movies', function(err) {
      if (err) throw err;
      console.log('Successfully connected');
    });

/* MOVIE FUNCTIONS */
module.exports.insertMovie = (data) => {
  let imdbID = JSON.parse(data).imdbID;
  return new Promise((resolve, reject) => {
    Movie.findOne({'description.imdbID': imdbID}).then((movie) => {
      console.log(movie);
      if (!movie) {
        let mov = new MovieModel(data);
        let insMovie = new Movie(mov);
        try {
          insMovie.save(function(err) {
            if (err) throw err;
            resolve(insMovie);
            console.log('Movie successfully saved.');
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        resolve(movie);
        console.log('movie already exists in database');
      }

    });
  });

};

module.exports.getAllMovies = () => {
  return new Promise(function(resolve, reject) {
    Movie.find({}, (err, movies) => {
    }).then((movies) => {
      resolve(movies);
    });
  });
};

module.exports.getMovieFromId = (movieId) => {
  return new Promise(function(resolve, reject) {
    Movie.findOne({_id: movieId}).then((movieId) => {
      resolve(movieId);
    });
  });
};

/* COMMENTS FUNCTIONS */

module.exports.insertComment = (body) => {
  return new Promise(function(resolve, reject) {
    let com = new CommentModel(body);
    let insCom = new Comment(com);
    insCom.save(
        (err)=>{
          if (err) throw err;
          resolve(insCom);
          console.log('Comment successfully saved.');
        }
    )
  });
};

module.exports.getAllComments = () => {
  return new Promise(function(resolve, reject) {
    Comment.find({}, (err, comments) => {
    }).then((comments) => {
      resolve(comments);
    });
  });
};

module.exports.getCommentsFromId = (movieId) => {
  console.log(movieId);
  return new Promise(function(resolve, reject) {
    Comment.find({movieId: movieId}).then((comments) => {
      console.log(comments);
      resolve(comments);
    });
  });
};


