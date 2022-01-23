import { LOADING_USER, ERROR_USER, SUCCESS_LOGIN, USER_EDIT_SUCCESS, FETCH_USER_SUCCESS, FETCH_USER_BY_ID_SUCCESS } from '../actionTypes';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const loadingUser = (payload) => {
  return {
    type: LOADING_USER,
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
    payload
  };
};

// =========================== LOGIN USER ===========================

export const setLogin = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingUser(true));
      // dispatch(errorUser(null));
      axios(`${baseUrl}/users/login`, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        data: payload,
      })
        // .then((data) => {
        //   if (data.ok) {
        //     return data.json();
        //   } else {
        //     // console.log(data.statusText);
        //     throw new Error(data.statusText);
        //   }
        // })
        .then(({ data }) => {
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            // localStorage.setItem('first_name', data.payloadClient.firstName);
            // localStorage.setItem('last_name', data.payloadClient.lastName);
            // localStorage.setItem('email', data.payloadClient.email);
            localStorage.setItem('id', data.payloadClient.id);
            resolve();
          }
        })
        .catch((err) => {
          // dispatch(errorUser(err));
          console.log(err.response.data.message, 'error<<<');
          reject(err);
        })
        .finally(() => {
          //   // dispatch(loadingUser(false));
        });
    });
  };
};

// =========================== REGISTER USER ===========================

export const setRegister = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // console.log('REGISTER ON CREATORS <<<<<<<<<<<<<<<<<<<<<<');
      // resolve();
      // dispatch(loadingUser(true));
      // dispatch(errorUser(null));
      axios(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        data: payload,
      })
        // .then((data) => {
        //   if (data.ok) {
        //     return data.json();
        //   } else {
        // console.log(data.statusText);
        // throw new Error(data.statusText);
        //   }
        // })
        .then((data) => {
          // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');

          if (!data.message) {
            resolve();
          }
          // console.log('OK ADD NEW PRODUCT');
        })
        .catch((err) => {
          // dispatch(errorUser(err));
          reject(err);
        })
        .finally(() => {
          // dispatch(loadingUser(false));
        });
    });
  };
};

export const setEditUser = (payload) => {
  const id = localStorage.getItem('id');
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // dispatch(loadingUser(true));
      // dispatch(errorUser(null));
      fetch(`${baseUrl}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(payload),
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            throw new Error(data.statusText);
          }
        })
        .then((data) => {
          if (!data.message) {
            dispatch(afterEditUser(id, data));
          }
          resolve();
        })
        .catch((err) => {
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
      // dispatch(loadingProducts(true));
      // dispatch(errorProducts(null));
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
        })
    });
  };
}