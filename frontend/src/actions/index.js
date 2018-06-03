import {FETCH_ALL_MOVIES_REQ, SEND_MOVIE_QUERY_REQ} from '../constants.js';
import {
  FETCH_ALL_COMMENTS_REQ, FETCH_COMMENTS_FOR_MOVIE_REQ,
  SEND_COMMENT_REQ,
} from '../constants';

export const fetchAllMoviesReq = () => ({
  type: FETCH_ALL_MOVIES_REQ
});

export const sendMovieQuery = (query) => ({
  type: SEND_MOVIE_QUERY_REQ,
  payload: query,
});

export const sendComment = (comment) => ({
  type: SEND_COMMENT_REQ,
  payload: comment,
});

export const fetchCommentsForMovie = (movieId) => ({
  type: FETCH_COMMENTS_FOR_MOVIE_REQ,
  payload: movieId,
});

export const fetchAllCommentsReq = () => ({
  type: FETCH_ALL_COMMENTS_REQ
});
