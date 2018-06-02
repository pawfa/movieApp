import {combineReducers} from 'redux';
import movies from './movies';
import comments from './comments';

export default combineReducers({
  movies,
  comments
});