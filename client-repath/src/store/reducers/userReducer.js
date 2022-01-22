import { LOADING_USER, ERROR_USER, SUCCESS_LOGIN , FETCH_USER_SUCCESS} from "../actionTypes";

const initialState = {
    user: [],
    users: [],
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

        case FETCH_USER_SUCCESS: 
        return {
            ...state,
            users: action.payload
        }
  
      default:
        return state;
    }
  }
  
  export default userReducer;