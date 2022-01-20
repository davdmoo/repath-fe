import { POSTS_FETCH_SUCCESS } from '../actionTypes';

const initialState = {
  posts: [],
  postsLoading: true,
  postsError: null,
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    // case PRODUCTS_DELETE_SUCCESS:
    //   const id = action.payload;
    //   const productsAfterDelete = state.products.filter((product) => product.id !== id);
    //   return {
    //     ...state,
    //     products: productsAfterDelete,
    //   };

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

    // case LOADING_PRODUCTS:
    //   return {
    //     ...state,
    //     productsLoading: action.payload,
    //   };

    // case ERROR_PRODUCTS:
    //   return {
    //     ...state,
    //     productsError: action.payload,
    //   };

    default:
      return state;
  }
}

export default postReducer;
