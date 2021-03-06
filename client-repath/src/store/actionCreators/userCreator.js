import { LOADING_USER, LOADING_USER_2, AFTER_POST_USER_LOADING, ERROR_USER, SUCCESS_LOGIN, USER_EDIT_SUCCESS, FETCH_USER_SUCCESS, FETCH_USER_BY_ID_SUCCESS } from '../actionTypes';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const loadingUser = (payload) => {
  return {
    type: LOADING_USER,
    payload,
  };
};

export const loadingUser2 = (payload) => {
  return {
    type: LOADING_USER_2,
    payload,
  };
};

export const postLoadingUser = (payload) => {
  return {
    type: AFTER_POST_USER_LOADING,
    payload,
  };
};

export const errorUser = (payload) => {
  return {
    type: ERROR_USER,
    payload,
  };
};

export const afterLogin = () => {
  return {
    type: SUCCESS_LOGIN,
  };
};

export const afterEditUser = (id, payload) => {
  return {
    type: USER_EDIT_SUCCESS,
    id,
    payload,
  };
};
export const setUsers = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const setUser = (payload) => {
  return {
    type: FETCH_USER_BY_ID_SUCCESS,
    payload,
  };
};

// =========================== LOGIN USER ===========================

export const setLogin = (payload) => {
  return (dispatch, getState) => {
    dispatch(postLoadingUser(true));
    return new Promise((resolve, reject) => {
      // dispatch(loadingUser(true));
      dispatch(errorUser(null));
      axios(`${baseUrl}/users/login`, {
        method: 'POST',
        data: payload,
      })
        .then(({ data }) => {
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('id', data.payloadClient.id);
            dispatch(postLoadingUser(false));
            resolve();
          }
        })
        .catch((err) => {
          dispatch(postLoadingUser(false));
          reject(err.response.data);
        });
      // .finally(() => {
      //   // dispatch(loadingUser(false));
      // });
    });
  };
};

// =========================== REGISTER USER ===========================

export const setRegister = (payload) => {
  return (dispatch, getState) => {
    dispatch(postLoadingUser(true));
    return new Promise((resolve, reject) => {
      // dispatch(loadingUser(true));
      // dispatch(errorUser(null));
      axios(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        data: payload,
      })
        .then((data) => {
          // console.log(data, '<<<<<<<<<< INI DATA SETELAH REGISTER');
          // if (!data.message) {
          dispatch(postLoadingUser(false));
          resolve(data);
          // }
          // console.log('OK ADD NEW PRODUCT');
        })
        .catch((err) => {
          dispatch(postLoadingUser(false));
          console.log(err.response.data.message);
          reject(err.response.data);
        });
      // .finally(() => {
      // dispatch(loadingUser(false));
      // });
    });
  };
};

// =========================== EDIT USER ===========================

export const setEditUser = (payload) => {
  const id = localStorage.getItem('id');
  return (dispatch, getState) => {
    dispatch(postLoadingUser(true));
    return new Promise((resolve, reject) => {
      // dispatch(postLoadingUser(true));
      // dispatch(errorUser(null));
      axios(`${baseUrl}/users/${id}`, {
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
        data: payload,
      })
        // .then((data) => {
        //   if (data.ok) {
        //     return data.json();
        //   } else {
        //     throw new Error(data.statusText);
        //   }
        // })
        .then((data) => {
          // if (!data.message) {
          // }
          dispatch(postLoadingUser(false));
          dispatch(afterEditUser(id, data));
          resolve();
        })
        .catch((err) => {
          dispatch(postLoadingUser(false));
          reject(err);
        })
        .finally(() => {
          // dispatch(loadingUser(false));
        });
    });
  };
};

// =========================== FETCH USER ===========================

export const fetchUsers = (payload) => {
  let payload2;
  if (!payload) {
    payload2 = '';
  } else {
    payload2 = payload;
  }

  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(loadingUser2(true));
      fetch(`${baseUrl}/users?name=${payload2}`, {
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
          dispatch(setUsers(data));
          // dispatch(loadingUser2(false));
          resolve();
        })
        .catch((err) => {
          // dispatch(loadingUser2(false));
          // dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingUser2(false));
        });
    });
  };
};

// =========================== FETCH USER BY ID ===========================

export const fetchUserById = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        url: `${baseUrl}/users/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((data) => {
          dispatch(setUser(data));
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
};

// =========================== Google Login ===========================
export const setGoogleLogin = (payload) => {
  return (dispatch, getState) => {

    // dispatch(postLoadingUser(true));

    return new Promise((resolve, reject) => {
      // dispatch(loadingUser(true));
      dispatch(errorUser(null));
      axios(`${baseUrl}/users/googleLogin`, {
        method: 'POST',
        data: {

          idToken: payload.getAuthResponse().id_token,
        },
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('id', data.payloadUser._id);
          // dispatch(postLoadingUser(false));
          resolve();

          // }
        })
        .catch((err) => {
       
          // dispatch(postLoadingUser(false));
          // reject(err.response.data);
        });
      // .finally(() => {
      //   // dispatch(loadingUser(false));
      // });
    });
  };
};

