import { FETCH_FOLLOWING_USERS } from '../actionTypes';

const baseUrl = 'http://localhost:3000';

export const fetchFollowingSuccess = (payload) => {
  return {
    type: FETCH_FOLLOWING_USERS,
    payload,
  };
};

export const followUser = (followId) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/follows/${followId}`, {
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then((data) => {
          console.log(data, 'FOLLOW SUCCESS');
        })
        .catch((err) => {
          console.log(err, `FOLLOW FAILED`);
        });
    });
  };
};

export const fetchFollowing = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/follows`, {
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
          console.log(data, `AAAAA`);
          dispatch(fetchFollowingSuccess(data));

          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
