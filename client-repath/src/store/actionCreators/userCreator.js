// import {} from '../actionTypes';
const baseUrl = 'https://deploy-server-backend-unicool.herokuapp.com';

// =========================== LOGIN USER ===========================

export const setLogin = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      console.log('LOGIN ON CREATORS <<<<<<<<<<<<<<<<<<<<<<');
      resolve();
      //   dispatch(loadingUser(true));
      //   dispatch(errorUser(null));
      //   fetch(`${baseUrl}/admin/login`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(payload),
      //   })
      // .then((data) => {
      //   if (data.ok) {
      //     return data.json();
      //   } else {
      //     // console.log(data.statusText);
      //     throw new Error(data.statusText);
      //   }
      // })
      // .then((data) => {
      //   if (data.access_token) {
      //     localStorage.setItem('access_token', data.access_token);
      //     resolve();
      //   }
      // })
      // .catch((err) => {
      //   dispatch(errorUser(err));
      //   reject(err);
      // })
      // .finally(() => {
      //   dispatch(loadingUser(false));
      // });
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
