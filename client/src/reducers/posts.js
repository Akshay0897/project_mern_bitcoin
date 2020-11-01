import { FETCH_ALL, SET_ALL } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case SET_ALL:
      return posts;
    default:
      return posts;
  }
};

