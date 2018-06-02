import {FETCH_ALL_MOVIES_REQ, FETCHED_MOVIE_RESPONSE,FETCH_ALL_MOVIES, SEND_MOVIE_QUERY_REQ,SEND_MOVIE_QUERY} from '../constants.js';

export const fetchAllMoviesReq = () => ({
  type: FETCH_ALL_MOVIES_REQ
});

export const sendMovieQuery = (query) => ({
  type: SEND_MOVIE_QUERY_REQ,
  payload: query,
});

// export const fetchedMovieResponse = (responseData) => ({
//   type: FETCHED_MOVIE_RESPONSE,
//   payload: responseData,
// });

export const fetchAllComments = () => ({
  type: 'FETCH_ALL_COMMENTS',
});

export const fetchCommentsForMovie = (movieId) => ({
  type: 'FETCH_COMMENTS_FOR_MOVIE',
  payload: movieId,
});

export const sendComment = (content) => ({
  type: 'SEND_COMMENT',
  payload: content,
});