import { SEARCH_MUSIC_LIST_SUCCESS, SEARCH_LOCATION_LIST_SUCCESS, LOADING_SEARCH, ERROR_SEARCH } from '../actionTypes';

const initialState = {
  musicList: [],
  locationList: [],
  searchLoading: true,
  searchError: null,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MUSIC_LIST_SUCCESS:
      return {
        ...state,
        musicList: action.payload,
      };

    case SEARCH_LOCATION_LIST_SUCCESS:
      return {
        ...state,
        locationList: action.payload,
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

    case LOADING_SEARCH:
      return {
        ...state,
        searchLoading: action.payload,
      };

    case ERROR_SEARCH:
      return {
        ...state,
        searchError: action.payload,
      };

    default:
      return state;
  }
}

export default searchReducer;
