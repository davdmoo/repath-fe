import {
  LOADING_USER,
  LOADING_USER_2,
  AFTER_POST_USER_LOADING,
  ERROR_USER,
  SUCCESS_LOGIN,
  FETCH_USER_SUCCESS,
  USER_EDIT_SUCCESS,
  FETCH_FOLLOWING_USERS,
  FETCH_FOLLOWER_USER,
  FETCH_USER_BY_ID_SUCCESS,
  USER_FETCH_REQUEST,
} from '../actionTypes';

const initialState = {
  user: {},
  users: [],
  userLoading: true,
  userLoading2: true,
  afterPostUser: false,
  userError: null,
  following: [],
  follower: [],
  request: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        userLoading: action.payload,
      };

    case LOADING_USER_2:
      return {
        ...state,
        userLoading2: action.payload,
      };

    case AFTER_POST_USER_LOADING:
      return {
        ...state,
        afterPostUser: action.payload,
      };

    case ERROR_USER:
      return {
        ...state,
        userError: action.payload,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_EDIT_SUCCESS:
      // const idUpdated = action.id;
      const updatedUser = action.payload;

      // let temp = [];
      // state.user.forEach((el) => {
      //   if (el.id !== idUpdated) {
      //     temp.push(el);
      //   } else {
      //     temp.push(updatedUser);
      //   }
      // });
      return {
        ...state,
        user: updatedUser,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case FETCH_FOLLOWING_USERS:
      return {
        ...state,
        following: action.payload,
      };

    case FETCH_FOLLOWER_USER:
      return {
        ...state,
        follower: action.payload,
      };

    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case USER_FETCH_REQUEST:
      return {
        ...state,
        request: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
