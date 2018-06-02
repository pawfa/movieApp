import { takeLatest, put,call } from 'redux-saga/effects'
import {FETCH_ALL_MOVIES_REQ, FETCHED_ALL_MOVIES, SEND_MOVIE_QUERY_REQ} from '../constants.js';
import {fetchAllMoviesReq, sendMovieQueryReq} from '../api/Api';
import {FETCHED_MOVIE_RESPONSE} from '../constants';

export default function* watcher() {
  yield takeLatest(FETCH_ALL_MOVIES_REQ, fetchAllMovies);
  yield takeLatest(SEND_MOVIE_QUERY_REQ, sendQuery);
}

export function* sendQuery(param) {
      const movies = yield call(sendMovieQueryReq,param);
      yield put({type:FETCHED_MOVIE_RESPONSE, payload:movies});
}

export function* fetchAllMovies() {
  const movies = yield call(fetchAllMoviesReq);
  yield put({type:FETCHED_ALL_MOVIES, payload:movies});
}