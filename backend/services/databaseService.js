let mongoose = require('mongoose');
let MovieModel = require('./movieModel').MovieModel;
const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: JSON,
  comments: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      content: String,
      dateTime: Date,
    }],
});

let Movie = mongoose.model('Movie', movieSchema);

module.exports.createDb = () => mongoose.connect(
    'mongodb://localhost:27017/movies', function(err) {
      if (err) throw err;
      console.log('Successfully connected');
    });

/* MOVIE FUNCTIONS */
module.exports.insertMovie = (data) => {
  let imdbID = JSON.parse(data).imdbID;
  return new Promise((resolve,reject)=>{
    Movie.findOne({"description.imdbID":imdbID}).then((movie) => {
      console.log(movie);
      if(!movie){
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
      }else{
        resolve(movie);
        console.log('movie already exists in database');
      }

    });
  })

};

module.exports.getAllMoviesTitles = () => {
  return new Promise(function(resolve, reject) {
    let moviesArr = [];
    Movie.find({}, (err, movies) => {
      // movies.forEach((e) => {
      //   moviesArr.push(e.description['Title']);
      // });
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

module.exports.getMovieFromImdbId = (imdbID) => {
  return new Promise(function(resolve, reject) {
    Movie.count({"description.imdbID":"imdbID"}).then((count) => {
      console.log(count);
      console.log(imdbID);
      resolve(count);
    });
  });
};

/* COMMENTS FUNCTIONS */

module.exports.insertComment = (movieId, content) => {
    console.log(movieId);
    console.log(content);
  let newDate = new Date();
  return new Promise(function(resolve, reject) {
    Movie.findByIdAndUpdate(movieId,
        {
          $push: {
            comments:
              {
                _id: new mongoose.Types.ObjectId(),
                content: content,
                dateTime: newDate.getTime(),
              },
          },
        },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
          };
        }
        );
  });

};

module.exports.getAllComments = () => {
  return new Promise(function(resolve, reject) {
    let commentsArr = [];
    Movie.find({}, (err, movies) => {
      movies.forEach((e) => {
        commentsArr.push([].concat.apply([], e.comments));
      });
    }).then(() => {
      resolve(commentsArr);
    });
  });
};


