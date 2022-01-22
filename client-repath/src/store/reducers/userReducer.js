import { LOADING_USER, ERROR_USER, SUCCESS_LOGIN, USER_EDIT_SUCCESS } from "../actionTypes";

const initialState = {
  user: [],
  userLoading: true,
  userError: null
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
        user: action.payload
      }
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

    default:
      return state;
  }
}

export default userReducer;