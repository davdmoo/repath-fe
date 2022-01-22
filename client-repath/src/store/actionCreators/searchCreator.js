import { SEARCH_MUSIC_LIST_SUCCESS, SEARCH_LOCATION_LIST_SUCCESS, LOADING_SEARCH, ERROR_SEARCH } from '../actionTypes';
const baseUrl = 'http://localhost:3000';

export const loadingSearch = (payload) => {
  return {
    type: LOADING_SEARCH,
    payload,
  };
};

export const errorSearch = (payload) => {
  return {
    type: ERROR_SEARCH,
    payload,
  };
};

// =========================== FETCH MUSICS ===========================

export const fetchMusicListSuccess = (payload) => {
  return {
    type: SEARCH_MUSIC_LIST_SUCCESS,
    payload,
  };
};

export const fetchMusicSearch = (payload) => {
  console.log(payload, 'INI PAYLOAD');
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(loadingSearch(true));
      dispatch(errorSearch(null));
      fetch(`${baseUrl}/fetchs/musics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          dispatch(fetchMusicListSuccess(data));

          // dispatch(setPosts(data));
          resolve(data);
        })

        .catch((err) => {
          console.log(err);
          dispatch(errorSearch(err));
          reject(err);
        })
        .finally(() => {
          dispatch(loadingSearch(false));
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
      dispatch(loadingSearch(true));
      dispatch(errorSearch(null));
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

        .catch((err) => {
          dispatch(errorSearch(err));
          reject(err);
        })
        .finally(() => {
          dispatch(loadingSearch(false));
        });
    });
  };
};


