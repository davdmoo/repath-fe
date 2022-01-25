import { FETCH_FOLLOWING_USERS, FETCH_FOLLOWER_USER, USER_FETCH_REQUEST } from '../actionTypes';
import axios from 'axios';
import { postLoadingAfterClick } from './postCreator';
import { loadingUser } from './userCreator';

const baseUrl = 'http://localhost:3000';

export const fetchFollowingSuccess = (payload) => {
  return {
    type: FETCH_FOLLOWING_USERS,
    payload,
  };
};

export const fetchFollowerSuccess = (payload) => {
  console.log(payload);
  return {
    type: FETCH_FOLLOWER_USER,
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

export const fetchRequestsSuccess = (payload) => {
  return {
    type: USER_FETCH_REQUEST,
    payload,
  };
};

export const fetchFollowing = () => {
  return (dispatch, getState) => {
    dispatch(loadingUser(true));
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/friends`, {
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
          dispatch(fetchFollowingSuccess(data));
          dispatch(loadingUser(false));

          resolve(data);
        })
        .catch((err) => {
          dispatch(loadingUser(false));
          reject(err);
        })
        .finally(() => {});
    });
  };
};

export const fetchFollower = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/follows/followers`, {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then((response) => {
          console.log(response, `AAAAAAAAA`);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          console.log(data, `AAAAA`);
          dispatch(fetchFollowerSuccess(data));

          resolve(data);
        })
        .catch((err) => {
          console.log(err, `Nani Error`);
          reject(err);
        });
    });
  };
};

export const addFriend = (userId) => {
  return (dispatch, getState) => {
    // dispatch(postLoadingAfterClick(true));
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: `${baseUrl}/friends/${userId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          // dispatch(postLoadingAfterClick(false));
          dispatch(getRequest());
          resolve();
        })
        .catch((err) => {
          // dispatch(postLoadingAfterClick(false));
          // console.log(err.response.data);
          reject(err.response.data);
        });
    });
  };
};

export const accFriendReq = (reqId) => {
  return (dispatch, getState) => {
    dispatch(postLoadingAfterClick(true));
    return new Promise((resolve, reject) => {
      axios({
        method: 'PATCH',
        url: `${baseUrl}/friends/${reqId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          dispatch(postLoadingAfterClick(false));
          dispatch(getRequest());
          resolve();
        })
        .catch((err) => {
          dispatch(postLoadingAfterClick(false));
          console.log(err);
          reject(err);
        });
    });
  };
};

export const delFriendReq = (reqId) => {
  return (dispatch, getState) => {
    dispatch(postLoadingAfterClick(true));
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        url: `${baseUrl}/friends/${reqId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          console.log(data);
          dispatch(postLoadingAfterClick(false));
          dispatch(getRequest());
          resolve();
        })
        .catch((err) => {
          dispatch(postLoadingAfterClick(false));
          console.log(err);
          reject(err);
        });
    });
  };
};

export const getRequest = () => {
  return (dispatch, getState) => {
    dispatch(loadingUser(true));
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/friends/requests`, {
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
          dispatch(fetchRequestsSuccess(data));

          resolve(data);
        })
        .catch((err) => {
          console.log(err, `FETCH REQUEST FAILED`);
        })
        .finally(() => {
          dispatch(loadingUser(false));
        });
    });
  };
};
