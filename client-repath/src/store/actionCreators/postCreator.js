import {
  POSTS_FETCH_SUCCESS,
  FETCH_SCROLLS,
  POSTS_DELETE_SUCCESS,
  LOADING_POSTS,
  ERROR_POSTS,
  AFTER_POST_LOADING,
  AFTER_CLICK_POST_LOADING,
  FETCH_AFTER_LIKE,
  FETCH_AFTER_COMMENT,
  FETCH_AFTER_UNLIKE,
  LIKED_POSTS_FETCH_SUCCESS,
} from '../actionTypes';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const baseUrl = 'http://localhost:3000';

export const loadingPosts = (payload) => {
  return {
    type: LOADING_POSTS,
    payload,
  };
};

export const errorPosts = (payload) => {
  return {
    type: ERROR_POSTS,
    payload,
  };
};

export const loadingAfterPost = (payload) => {
  return {
    type: AFTER_POST_LOADING,
    payload,
  };
};

export const postLoadingAfterClick = (payload) => {
  return {
    type: AFTER_CLICK_POST_LOADING,
    payload,
  };
};

export const fetchAfterLike = (payload) => {
  return {
    type: FETCH_AFTER_LIKE,
    payload,
  };
};

export const fetchAfterUnlike = (payload) => {
  return {
    type: FETCH_AFTER_UNLIKE,
    payload,
  };
};

export const fetchAfterComment = (payload) => {
  return {
    type: FETCH_AFTER_COMMENT,
    payload,
  };
};

export const fetchScrolls = (payload) => {
  return {
    type: FETCH_SCROLLS,
    payload,
  };
};

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

export const fetchPosts = (skip) => {
  return (dispatch, getState) => {
    dispatch(loadingPosts(true));
    dispatch(errorPosts(null));
    fetch(`${baseUrl}/posts?skip=${skip}`, {
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
        dispatch(setPosts(data));
        if (data.length == 0) {
          dispatch({
            type: 'HAS_MORE',
            payload: false,
          });
        }
        // dispatch(fetchScrolls());
        // resolve(data);
      })
      .catch((err) => {
        // dispatch(errorPosts(err));
        // reject();
      })
      .finally(() => {
        // dispatch(loadingPosts(false));
      });
  };
};

export const fetchPostsAfterLikeUnlike = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(errorPosts(null));
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
          dispatch(setPosts(data));
          resolve();
        })
        .catch((err) => {
          dispatch(errorPosts(err));
          reject();
        });
    });
  };
};

export const setLikedPosts = (payload) => {
  return {
    type: LIKED_POSTS_FETCH_SUCCESS,
    payload,
  };
};

// =========================== POST TEXT X IMAGE ===========================

export const addPostTextImage = (payloadFormData) => {
  return (dispatch, getState) => {
    dispatch(loadingAfterPost(true));
    return new Promise((resolve, reject) => {
      axios(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        data: payloadFormData,
      })
        // .then((data) => {
        //   if (data.ok) {
        //     return data.json();
        //   } else {
        //     console.log(data);
        //     throw new Error(data);
        //   }
        // })
        .then((data) => {
          // if (!data.message) {
          dispatch(loadingAfterPost(false));
          resolve();
          // }
          // console.log('OK ADD NEW PRODUCT');
        })
        .catch((err) => {
          dispatch(loadingAfterPost(false));
          console.log(err.response.data.message);
          reject(err.response.data);
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
          dispatch(setDeletePost(id));
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
    dispatch(loadingAfterPost(true));
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
          dispatch(loadingAfterPost(false));
          resolve();
        })
        .catch((err) => {
          dispatch(loadingAfterPost(false));
          console.log(err);
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
      dispatch(loadingAfterPost(true));
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
          dispatch(loadingAfterPost(false));
          resolve();
        })
        .catch((err) => {
          dispatch(loadingAfterPost(false));
          console.log(err);
        })
        .finally(() => {
          // dispatch(loadingProducts(false));
        });
    });
  };
};

export const likePost = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: `${baseUrl}/likes/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          dispatch(fetchAfterLike(data));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const unlikePost = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        url: `${baseUrl}/likes/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          dispatch(fetchAfterUnlike(data));
          // dispatch(fetchPostsAfterLikeUnlike(data));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const commentPost = ({ id, content }) => {
  return (dispatch, getState) => {
    dispatch(postLoadingAfterClick(true));
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: `${baseUrl}/comments/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: { content },
      })
        .then((data) => {
          dispatch(fetchAfterComment(data));

          dispatch(postLoadingAfterClick(false));
          resolve();
        })
        .catch((err) => {
          dispatch(postLoadingAfterClick(false));
          reject(err);
        });
    });
  };
};

export const fetchLikedPosts = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(loadingPosts(true));
      dispatch(errorPosts(null));
      fetch(`${baseUrl}/posts/likes`, {
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
          dispatch(setLikedPosts(data));
          resolve();
        })
        .catch((err) => {
          dispatch(errorPosts(err));
          reject();
        })
        .finally(() => {
          dispatch(loadingPosts(false));
        });
    });
  };
};
