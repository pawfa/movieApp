import {FETCH_ALL_MOVIES_REQ, SEND_MOVIE_QUERY_REQ} from '../constants.js';

export const fetchAllMoviesReq = () => ({
  type: FETCH_ALL_MOVIES_REQ
});

export const sendMovieQuery = (query) => ({
  type: SEND_MOVIE_QUERY_REQ,
  payload: query,
});

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