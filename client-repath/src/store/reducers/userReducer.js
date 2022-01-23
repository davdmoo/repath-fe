
import { LOADING_USER, ERROR_USER, SUCCESS_LOGIN , FETCH_USER_SUCCESS, USER_EDIT_SUCCESS, FETCH_FOLLOWING_USERS,FETCH_FOLLOWER_USER, FETCH_USER_BY_ID_SUCCESS } from "../actionTypes";

const initialState = {
    user: {},
    users: [],
    userLoading: true,
    userError: null,
    following: [],
    follower:[]
}


function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        userLoading: action.payload,
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
      const idUpdated = action.id;
      const updatedUser = action.payload;

      let temp = [];
      state.user.forEach((el) => {
        if (el.id !== idUpdated) {
          temp.push(el);
        } else {
          temp.push(updatedUser);
        }
      });
      return {
        ...state,
        user: temp,
      };

    case FETCH_USER_SUCCESS: 
    return {
        ...state,
        users: action.payload
      }
    
    case FETCH_FOLLOWING_USERS:
      return{
        ...state,
        following: action.payload
      }
    
    case FETCH_FOLLOWER_USER:
      return{
        ...state,
        follower: action.payload
      }
    
    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
}

export default userReducer