import {
  FETCHED_ALL_COMMENTS, FETCHED_COMMENTS_FOR_MOVIE,
  FETCHED_COMMENT_RESPONSE,
} from '../constants';

const comments = (state = [], action) => {

  switch (action.type) {
    case FETCHED_ALL_COMMENTS:

      return [...action.payload];
    case FETCHED_COMMENT_RESPONSE:
      console.log(action.payload);
      return [...state, action.payload];
    case FETCHED_COMMENTS_FOR_MOVIE:
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export default comments;