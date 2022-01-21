import { POSTS_FETCH_SUCCESS, POSTS_DELETE_SUCCESS } from '../actionTypes';

const baseUrl = 'http://localhost:3000';

// =========================== FETCH POST TIMELINE ===========================

export const setPosts = (payload) => {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload,
  };
};

export const setDeletePost = (payload) => {
  return {
    type: POSTS_DELETE_SUCCESS,
    payload,
  };
};

export const fetchPosts = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
      fetch(`${baseUrl}/posts`, {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          console.log(data);
          dispatch(setPosts(data));
          resolve();
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

// =========================== POST TEXT X IMAGE ===========================

export const addPostTextImage = (payloadFormData) => {
  console.log(payloadFormData, '<<<<<<<<<<<<<<<<<<<<<< INI DI CREATOR BERUPA FORM DATA');
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        body: payloadFormData,
      })
        // .then((data) => {
        //   if (data.ok) {
        //     return data.json();
        //   } else {
        //     // console.log(data.statusText);
        //     throw new Error(data.statusText);
        //   }
        // })
        .then((data) => {
          // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH NGE-POST');
          // if (!data.message) {
          //   dispatch(fetchAfterAddProduct(data));
          resolve();
          // }
          // console.log('OK ADD NEW PRODUCT');
        })
        .catch((err) => {
          console.log(err);
          // reject(err);
        });
    });
  };
};

// =========================== DELETE POST ===========================

export const deletePost = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingPost(true));
      // dispatch(errorPost(null));
      fetch(`${baseUrl}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            throw new Error('failed delete post');
          }
        })
        .then((data) => {
          // console.log(data, 'success deleted post');
          // dispatch(setDeletePost(id))
          resolve();
        })
        .catch((err) => {
          // console.log(err, 'failed delete post');
          // dispatch(setErrorPost(err))
          reject(err);
        })
        .finally(() => {
          // dispatch(setLoadingPost(false))
        });
    });
  };
};

// =========================== POST MUSIC ===========================

export const postMusic = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
      fetch(`${baseUrl}/posts`, {
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
          // dispatch(fetchMusicListSuccess(data));
          // setArrayListMusics(data);
          // console.log(arrayListMusics, '<<<<<<<<<< INI ARRAY MUSIC LIST');

          // dispatch(setPosts(data));
          resolve();
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

// =========================== POST LOCATION ===========================

export const postLocation = (payload) => {
  let sendToServer = { location: payload.location, type: 'location' };
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
      fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(sendToServer),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          resolve();
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
