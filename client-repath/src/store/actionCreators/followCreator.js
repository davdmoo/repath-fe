import { FETCH_FOLLOWING_USERS, FETCH_FOLLOWER_USER } from '../actionTypes';
import axios from "axios";

const baseUrl = 'http://localhost:3000';

export const fetchFollowingSuccess = (payload) => {
  return {
    type: FETCH_FOLLOWING_USERS,
    payload,
  };
};

export const fetchFollowerSuccess = (payload) => {
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
          console.log(response, `AAAAAAAAA`)
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
          console.log(err, `Nani Error`)
          reject(err);
        });
    });
  };
};

export const addFriend = (userId) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${baseUrl}/friends/${userId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    });
  };
};

export const accFriendReq = (reqId) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "PATCH",
        url: `${baseUrl}/friends/${reqId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    })
  }
};

export const delFriendReq = (reqId) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${baseUrl}/friends/${reqId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    })
  }
}
