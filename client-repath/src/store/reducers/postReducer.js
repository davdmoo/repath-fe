import { POSTS_FETCH_SUCCESS, POSTS_DELETE_SUCCESS, LOADING_POSTS, ERROR_POSTS, AFTER_POST_LOADING, AFTER_CLICK_POST_LOADING, LIKED_POSTS_FETCH_SUCCESS } from '../actionTypes';

const initialState = {
  posts: [],
  postsLoading: true,
  afterClickPostLoading: false,
  postsError: null,
  afterPostLoading: false,
  likedPosts: []
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case POSTS_DELETE_SUCCESS:
      const id = action.payload;
      const postAfterDelete = state.posts.filter((post) => post._id !== id);
      return {
        ...state,
        posts: postAfterDelete,
      };

    // case PRODUCTS_ADD_SUCCESS:
    //   const newProduct = action.payload;
    //   const productsAfterAddNew = [...state.products, newProduct];

    //   return {
    //     ...state,
    //     products: productsAfterAddNew,
    //   };

    // case PRODUCTS_EDIT_SUCCESS:
    //   const idUpdated = action.id;
    //   const updatedProduct = action.payload;

    //   let temp = [];
    //   state.products.forEach((el) => {
    //     if (el.id !== idUpdated) {
    //       temp.push(el);
    //     } else {
    //       temp.push(updatedProduct);
    //     }
    //   });
    //   return {
    //     ...state,
    //     products: temp,
    //   };

    case LOADING_POSTS:
      return {
        ...state,
        postsLoading: action.payload,
      };

    case ERROR_POSTS:
      return {
        ...state,
        postsError: action.payload,
      };

    case AFTER_POST_LOADING:
      return {
        ...state,
        afterPostLoading: action.payload,
      };

    case AFTER_CLICK_POST_LOADING:
      return {
        ...state,
        afterClickPostLoading: action.payload,
      };
    
    case LIKED_POSTS_FETCH_SUCCESS:
      return {
        ...state,
        likedPosts: action.payload
      }

    default:
      return state;
  }
}

export default postReducer;
