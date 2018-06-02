import { takeLatest, put,call } from 'redux-saga/effects'
import {FETCH_ALL_MOVIES_REQ, FETCH_ALL_MOVIES, SEND_MOVIE_QUERY_REQ,SEND_MOVIE_QUERY} from '../constants.js';
import {sendMovieQuery} from '../api/Api'

export default function* watcher(param) {
  // yield takeLatest(FETCH_ALL_MOVIES_REQ, fetchAllMovies);
  yield takeLatest(SEND_MOVIE_QUERY_REQ, sendQuery);
}

export function* sendQuery(param) {
      const movies = yield call(sendMovieQuery,param);
      yield put({type: SEND_MOVIE_QUERY, movies})
}