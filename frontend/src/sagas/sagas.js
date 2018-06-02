import {takeLatest, put, call} from 'redux-saga/effects';
import {
  FETCH_ALL_MOVIES_REQ,
  FETCHED_ALL_MOVIES,
  SEND_MOVIE_QUERY_REQ,
  FETCHED_MOVIE_RESPONSE,
  FETCH_ALL_COMMENTS_REQ,
  SEND_COMMENT_REQ,
  FETCHED_COMMENTS_FOR_MOVIE, FETCHED_COMMENT_RESPONSE,
  FETCHED_ALL_COMMENTS, FETCH_COMMENTS_FOR_MOVIE_REQ,
} from '../constants';
import {
  fetchAllMoviesReq, sendCommentReq,
  sendMovieQueryReq,
  fetchAllCommentsReq, fetchCommentsForIdReq,
} from '../api/Api';

export default function* watcher() {
  yield takeLatest(FETCH_ALL_MOVIES_REQ, fetchAllMovies);
  yield takeLatest(SEND_MOVIE_QUERY_REQ, sendQuery);
  yield takeLatest(FETCH_ALL_COMMENTS_REQ, fetchAllComments);
  yield takeLatest(SEND_COMMENT_REQ, sendComment);
  yield takeLatest(FETCH_COMMENTS_FOR_MOVIE_REQ, fetchCommentsForId);
}

export function* sendQuery(param) {
  try {
    const movies = yield call(sendMovieQueryReq, param);
    yield put({type: FETCHED_MOVIE_RESPONSE, payload: movies});
  } catch (e) {console.log(e); }
}

export function* fetchAllMovies() {
  const movies = yield call(fetchAllMoviesReq);
  yield put({type: FETCHED_ALL_MOVIES, payload: movies});
}

export function* sendComment(param) {
  console.log(param);
  try {
    const comments = yield call(sendCommentReq, param);
    yield put({type: FETCHED_COMMENT_RESPONSE, payload: comments});
  } catch (e) {console.log(e); }
}

export function* fetchAllComments() {
  const comments = yield call(fetchAllCommentsReq);
  yield put({type: FETCHED_ALL_COMMENTS, payload: comments});
}

export function* fetchCommentsForId(param) {
  const comments = yield call(fetchCommentsForIdReq,param);
  yield put({type: FETCHED_COMMENTS_FOR_MOVIE, payload: comments});
}