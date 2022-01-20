import { POSTS_FETCH_SUCCESS } from '../actionTypes';
const baseUrl = 'http://localhost:3000';

// =========================== LOGIN USER ===========================

export const setPosts = (payload) => {
  return {
    type: POSTS_FETCH_SUCCESS,
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
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6bWkxQG1haWwuY29tIiwiaWF0IjoxNjQyNjgxMzQ2fQ.bdiWSyEocgSSHw_scA5eY8nKJvf2eNij9yCA7Ffd_pY',
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

// =========================== REGISTER USER ===========================

export const setRegister = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      console.log('REGISTER ON CREATORS <<<<<<<<<<<<<<<<<<<<<<');
      resolve();
      //   dispatch(loadingUser(true));
      //   dispatch(errorUser(null));
      //   fetch(`${baseUrl}/admin/register`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       access_token: localStorage.getItem('access_token'),
      //     },
      //     body: JSON.stringify(payload),
      //   })
      //     .then((data) => {
      //       if (data.ok) {
      //         return data.json();
      //       } else {
      //         // console.log(data.statusText);
      //         throw new Error(data.statusText);
      //       }
      //     })
      //     .then((data) => {
      //       // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');

      //       if (!data.message) {
      //         resolve();
      //       }
      //       // console.log('OK ADD NEW PRODUCT');
      //     })
      //     .catch((err) => {
      //       dispatch(errorUser(err));
      //       reject(err);
      //     })
      //     .finally(() => {
      //       dispatch(loadingUser(false));
      //     });
    });
  };
};

export const addPostTextImage = (payloadFormData) => {
  console.log(payloadFormData, '<<<<<<<<<<<<<<<<<<<<<< INI DI CREATOR BERUPA FORM DATA');
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6bWkxQG1haWwuY29tIiwiaWF0IjoxNjQyNjgxMzQ2fQ.bdiWSyEocgSSHw_scA5eY8nKJvf2eNij9yCA7Ffd_pY',
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
