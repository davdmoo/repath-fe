import { SEARCH_MUSIC_LIST_SUCCESS, SEARCH_LOCATION_LIST_SUCCESS } from '../actionTypes';
const baseUrl = 'http://localhost:3000';

// =========================== FETCH MUSICS ===========================

export const fetchMusicListSuccess = (payload) => {
  return {
    type: SEARCH_MUSIC_LIST_SUCCESS,
    payload,
  };
};

export const fetchMusicSearch = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
      fetch(`${baseUrl}/fetchs/musics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          dispatch(fetchMusicListSuccess(data));
          // setArrayListMusics(data);
          // console.log(arrayListMusics, '<<<<<<<<<< INI ARRAY MUSIC LIST');

          // dispatch(setPosts(data));
          resolve(data);
        })
        .then((data) => {
          // console.log(arrayListMusics, '<<<<<<<<<< INI ARRAY MUSIC LIST 2');
        })
        .catch((err) => {
          // dispatch(errorProducts(err));
        })
        .finally(() => {
          // dispatch(loadingProducts(false));
        });
    });
  };
};

// =========================== FETCH MUSICS ===========================

export const fetchLocationListSuccess = (payload) => {
  return {
    type: SEARCH_LOCATION_LIST_SUCCESS,
    payload,
  };
};

export const fetchLocationSearch = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
      fetch(`${baseUrl}/fetchs/locations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          dispatch(fetchLocationListSuccess(data));
          // setArrayListMusics(data);
          // console.log(arrayListMusics, '<<<<<<<<<< INI ARRAY MUSIC LIST');

          // dispatch(setPosts(data));
          resolve(data);
        })
        .then((data) => {
          // console.log(arrayListMusics, '<<<<<<<<<< INI ARRAY MUSIC LIST 2');
        })
        .catch((err) => {
          // dispatch(errorProducts(err));
        })
        .finally(() => {
          // dispatch(loadingProducts(false));
        });
    });
  };
};
