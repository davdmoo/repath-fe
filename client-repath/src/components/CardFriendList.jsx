import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch, useSelector } from 'react-redux';
import { delFriendReq } from '../store/actionCreators/followCreator';
import { followUser, addFriend, fetchFollowing } from '../store/actionCreators/followCreator';

function CardFriendList({ user }) {
<<<<<<< HEAD
  const dispatch = useDispatch()

  const handleDelFriend = (reqId) => {
    console.log(reqId);
    dispatch(delFriendReq(reqId))
  }
=======
  const dispatch = useDispatch();

  const handleDelFriend = (reqId) => {
    dispatch(delFriendReq(reqId));
  };

  // const { following } = useSelector((state) => state.userReducer);
  // useEffect(() => {
  //   dispatch(fetchFollowing());
  // }, []);
>>>>>>> 06078969686b5f9219527b29048fe6b2fe5fafc9
  return (
    <Card style={{ border: '0px' }}>
      <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
        <div className="card-container-friendlist">
          <div className="card-left-side-friendlist d-flex align-items-center">
            {user.imgUrl ? (
              <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
            ) : (
              <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
            )}
          </div>
          <div className="card-right-side-friendlist d-flex flex-row align-items-center">
            <div className="content-friendlist" style={{ width: '200px', textAlign: 'left' }}>
              <div className="friendlist-name">
                {user.firstName} {user.lastName}
              </div>
              <div className="friendlist-city">{user.city}</div>
            </div>
          </div>
          <div style={{ width: '100px' }} className="d-flex justify-content-center align-items-center">
            <PersonRemoveIcon onClick={() => handleDelFriend(user.phoneNumber)} sx={{ width: 35, height: 35, color: red[500] }} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFriendList;
